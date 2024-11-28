import { createClient } from "@/utils/supabase/client";

export default async function Countries() {
  const supabase = await createClient();
  const { data: movies } = await supabase.from("movies").select('*');
  console.log(movies);
  return <pre>{JSON.stringify(movies, null, 2)}</pre>
}