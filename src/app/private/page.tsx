import { redirect } from "next/navigation";
import LogoutButton from "@/components/logout-button";

import { createSupabaseServerClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <LogoutButton />
    </div>
  );
}
