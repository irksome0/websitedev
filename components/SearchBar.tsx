import searchIcon from "@/public/search-icon.svg";
import Image from "next/image";
import { Filters } from "./Filters";

export const SearchBar = () => {
  return (
    <search className="flex w-[600px] flex-row rounded-3xl border border-border-secondary bg-bg-button-base-primary p-1 transition duration-200 ease-linear hover:bg-bg-button-base-secondary">
      <Image
        height={40}
        width={40}
        src={searchIcon}
        alt="search"
        className="rounded-full transition duration-200 ease-in-out hover:bg-bg-button-base-tertiary"
      />
      <input
        type="text"
        placeholder='Try to search "youtube", "MFM" or "Florida"'
        className="w-full cursor-pointer border-border-secondary text-txt-secondary outline-none border-r-2 bg-bg-button-search transition duration-200 ease-in-out hover:placeholder-txt-primary"
      />
      <Filters />
    </search>
  );
};
