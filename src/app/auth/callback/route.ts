import { createSupabaseServerClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { userOnRoster } from "@/utils/supabase/roster";
import { createUser } from "@/utils/supabase/createUser";
import { googleUserExists } from "@/utils/supabase/userExists";
import { linkGoogleUID } from "@/utils/supabase/linkGoogleUID";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(`${origin}/auth/auth-error`);
    }

    const authUserResponse = await supabase.auth.getUser();
    const authUser = authUserResponse.data.user;

    if (authUser && authUser.email) {
      const isOnRoster = await userOnRoster(authUser.email);
      const existingUser = await googleUserExists(authUser.id);

      // User has logged in before, so proceed
      if (existingUser) {
        return NextResponse.redirect(`${origin}${next}`);
      }

      // On roster but logging in for first time
      // Automatically generate new user for them
      if (isOnRoster) {
        console.log("creating user...");
        const newUser = await createUser(authUser.email);
        await linkGoogleUID(newUser.user_id, authUser.id);
        return NextResponse.redirect(`${origin}${next}`);
      }

      // NOT on roster: deny login
      else {
        console.log("user not on roster, redirecting");
        await supabase.auth.signOut();
        return NextResponse.redirect(`${origin}/auth/not-on-roster`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-error`);
}
