"use server";

import { createServiceClient } from "./server";

export async function isUserOnRoster(email: string): Promise<boolean> {
  try {
    const supabase = createServiceClient();
    let { data, error } = await supabase
      .from("roster")
      .select("email")
      .eq("email", email)
      .single();

    if (error) {
      throw error;
    }

    console.log(data);

    return data !== null;
  } catch (error) {
    console.error("Error checking roster:", error);
    return false;
  }
}
