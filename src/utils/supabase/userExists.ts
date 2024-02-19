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

export async function googleUserExists(uid: string): Promise<boolean> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("google_auth")
    .select("*")
    .eq("google_uid", uid)
    .maybeSingle();

  if (error) {
    console.error("Error checking if google user exists:", error);
    throw error;
  }

  return !!data;
}
