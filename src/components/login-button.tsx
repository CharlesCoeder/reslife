"use client";

import { handleLogin } from "@/utils/supabase/handleLogin";

export default function LoginButton(props: { nextUrl?: string }) {
  return <button onClick={() => handleLogin(props.nextUrl)}>Login</button>;
}
