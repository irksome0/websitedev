import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search";
import { FiltersStoreProvider } from "@/providers/filtersStoreProvider";

export default function Discover() {
  return (
    <main className="flex flex-col items-center bg-bg-tertiary pt-4">
      <FiltersStoreProvider>
        <Header active="discover" />
        <Search />
        <Footer />
      </FiltersStoreProvider>
    </main>
  );
}
