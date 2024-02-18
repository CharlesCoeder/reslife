"use server";

import { createSupabaseServerClient } from "./server";

export async function createUser(userId: string, email: string) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase
    .from("users")
    .insert([{ id: userId, email }]);

  if (error) {
    console.error("Error creating new user:", error);
    throw error;
  }

  console.log("new user created");
}
