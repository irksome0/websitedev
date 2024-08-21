import { SearchBar } from "./SearchBar";

export const Search = () => {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <h1 className="mb-5 font-medium text-header-2 text-txt-secondary">
        Find other adult content creators
      </h1>
      <SearchBar />
    </section>
  );
};
