"use server";

import { createSupabaseServerClient } from "./server";

export async function userExists(email: string): Promise<boolean> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error && error.message !== "No rows found") {
    console.error("Error checking if user exists:", error);
    throw error;
  }

  console.log(`user exists: ${data}`);

  return !!data;
}
