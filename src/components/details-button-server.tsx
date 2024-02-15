import { createSupabaseServerComponentClient } from "@/utils/supabase/server";
import DetailsButtonClient from "./details-button-client";

export default async function DetailsButtonServer() {
  const {
    data: { session },
    error,
  } = await createSupabaseServerComponentClient().auth.getSession();

  return <DetailsButtonClient session={session} />;
}
