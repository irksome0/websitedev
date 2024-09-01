import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { FiltersStoreProvider } from "@/providers/filtersStoreProvider";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Discover() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    revalidatePath("/signin", "layout");
    redirect("/signin");
  }

  return (
    <main className="flex flex-col items-center bg-bg-tertiary pt-4">
      <FiltersStoreProvider>
        <Header
          active="discover"
          user={{
            name: "user",
            surname: "",
            email: data.user.email,
          }}
        />
        <Search />
        <Footer />
      </FiltersStoreProvider>
    </main>
  );
}
