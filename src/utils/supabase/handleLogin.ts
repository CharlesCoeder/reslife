import { createSupabaseBrowserClient } from "./client";

export async function handleLogin(nextUrl = "") {
  const supabase = createSupabaseBrowserClient();
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/auth/callback?next=${nextUrl || ""}`,
      queryParams: {
        prompt: "select_account",
      },
    },
  });
}
