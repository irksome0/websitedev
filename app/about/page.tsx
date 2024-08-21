import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export default function About() {
  return (
    <main className="flex flex-col items-center bg-bg-tertiary px-5 pt-4">
      <Header active="about" />
      About
      <Footer />
    </main>
  );
}
