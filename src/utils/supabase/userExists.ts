import { createServiceClient } from "./server";

export async function userExists(email: string): Promise<boolean> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.error("Error checking if user exists:", error);
    throw error;
  }

  return !!data;
}
