"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { optionsVariants } from "./variants/optionsVariants";
import { motion } from "framer-motion";
import { useFitlersStore } from "@/providers/filtersStoreProvider";

export const CountryFilter = forwardRef((_props, ref) => {
  const locationsGlobal = useFitlersStore((state) => state.countries);
  const applyLocations = useFitlersStore((state) => state.applyCountries);

  const [locationFilters, setLocationFilters] =
    useState<Array<string>>(locationsGlobal);
  const [country, selectCountry] = useState<string>();

  const clearFilters = () => {
    setLocationFilters([]);
    applyLocations([]);
  };

  const applyFilters = () => {
    applyLocations(locationFilters);
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useImperativeHandle(
    ref,
    () => ({
      clearFilters,
      applyFilters,
    }),
    [locationFilters]
  );

  const updateLocation = (val: string) => {
    if (val !== undefined && !locationFilters.includes(val)) {
      selectCountry(val);
      if (locationFilters[0] === "") {
        setLocationFilters([val as string]);
      } else {
        setLocationFilters((prev) => [...prev, val as string]);
      }
    }
  };
  const deleteElement = (e: any) => {
    const temp = e.currentTarget.id;
    setLocationFilters((prev) => prev.filter((item) => item !== temp));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-txt-tertiary text-lg mt-[10px] cursor-default">
          Country & city:
        </h1>
        {locationFilters.length ? (
          <h2 className="text-txt-queternary text-sm me-5 mt-3">
            {locationFilters.length}
          </h2>
        ) : (
          <h2 className="text-txt-onerror-secondary text-sm me-5 mt-3">
            You have to pick at least 1 country!
          </h2>
        )}
      </div>
      <CountryDropdown
        defaultOptionLabel="Write or select country here"
        classes="text-txt-queternary outline-border-primary my-3 outline-offset-2 outline-2 border-border-tertiary border-2 rounded-2xl bg-bg-primary font-normal text-body py-[15px] px-[12px]"
        value={country as string}
        onChange={(val) => updateLocation(val)}
      />
      <div className="grid grid-cols-2 gap-2">
        {locationFilters.map((element, index) => (
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={optionsVariants}
            transition={{ duration: 0.2, ease: "easeIn" }}
            key={index}
            id={element}
            className="p-2 max-w- flex flex-row justify-center gap-2 items-center bg-bg-button-supp-primary border-border-onsupp-secondary text-txt-supp-primary text-base cursor-pointer border-2 rounded-3xl"
            onClick={deleteElement}
          >
            {element}
            <span className="material-symbols-outlined">close</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
});

CountryFilter.displayName = "CountryFilter";
