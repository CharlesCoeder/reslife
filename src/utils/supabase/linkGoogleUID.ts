import { createServiceClient } from "./server";

export async function linkGoogleUID(userId: number, googleUID: string) {
  const supabase = createServiceClient();
  const { error } = await supabase
    .from("google_auth")
    .insert([{ user_id: userId, google_uid: googleUID }]);

  if (error) {
    console.error("Error linking Google UID:", error);
    throw error;
  }
}
