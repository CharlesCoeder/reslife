import { createServiceClient } from "./server";

export async function userOnRoster(email: string): Promise<boolean> {
  const supabase = createServiceClient();
  let { data, error } = await supabase
    .from("roster")
    .select("email")
    .eq("email", email)
    .select();

    if (error) {
      console.error("Error checking roster:", error);
      throw error;
    }

  if (data) {
    return data.length > 0;
  }
  return false;
}
