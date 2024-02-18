import { createServiceClient } from "./server";

export async function createUser(email: string) {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("users")
    .insert([{ email }])
    .select();

  if (error) {
    console.error("Error creating new user:", error);
    throw error;
  }

  const newUser = data[0];

  return newUser;
}
