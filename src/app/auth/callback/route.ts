import { createSupabaseServerClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { isUserOnRoster } from "@/utils/supabase/roster";
import { createUser } from "@/utils/supabase/createUser";
import { userExists } from "@/utils/supabase/userExists";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createSupabaseServerClient();
    const { error, data: session } = await supabase.auth.exchangeCodeForSession(
      code
    );

    if (error) {
      return NextResponse.redirect(`${origin}/auth/auth-error`);
    }

    console.log(`Session:`, session);
    const user = session.user;

    if (user && user.email) {
      const userOnRoster = await isUserOnRoster(user.email);
      const existingUser = await userExists(user.id);

      if (userOnRoster && !existingUser) {
        console.log("creating user...");
        // Create a new user as they are on the roster but not in the system
        await createUser(user.id, user.email);
      }

      if (userOnRoster) {
        console.log("user on roster, proceeding");
        // User is authenticated and either exists or has just been created
        return NextResponse.redirect(`${origin}${next}`);
      } else {
        // User is not on the roster
        console.log("user not on roster, redirecting");
        return NextResponse.redirect(`${origin}/auth/not-on-roster`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-error`);
}
