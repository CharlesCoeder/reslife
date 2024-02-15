"use client";

import { createSupabaseBrowserClient } from "@/utils/supabase/client";

export default function LoginButton(props: { nextUrl?: string }) {
  const supabase = createSupabaseBrowserClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          props.nextUrl || ""
        }`,
        queryParams: {
          prompt: "select_account",
        },
      },
    });
  };

  return <button onClick={handleLogin}>Login</button>;
}
