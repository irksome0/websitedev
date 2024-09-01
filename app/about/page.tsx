import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
export default async function About() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return (
      <main className="flex flex-col items-center bg-bg-tertiary px-5 pt-4">
        <h1 className="text-txt-secondary font-bold text-header-1">About</h1>
      </main>
    );
  }
  return (
    <main className="flex flex-col items-center bg-bg-tertiary px-5 pt-4">
      <Header
        active="about"
        user={{
          name: "User",
          surname: "",
          email: data.user.email,
        }}
      />
      About
      <Footer />
    </main>
  );
}
