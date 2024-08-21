import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Messages() {
  return (
    <main className="flex flex-col items-center bg-bg-tertiary pt-4">
      <Header active="messages" />
      Messages
      <Footer />
    </main>
  );
}
