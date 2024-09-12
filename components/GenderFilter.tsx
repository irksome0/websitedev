"use client";

import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useFitlersStore } from "@/providers/filtersStoreProvider";
import { OptionButton } from "./OptionButton";
import { GendersProps } from "@/typings";

const gendersDefaultState = {
  male: false,
  female: false,
  other: false,
};

export const GenderFilter = forwardRef((_props, ref) => {
  const genderGlobal = useFitlersStore((state) => state.genders);
  const applyGenders = useFitlersStore((state) => state.applyGenders);

  const [genders, selectGenders] = useState(genderGlobal);

  const clearFilters = () => {
    selectGenders(gendersDefaultState);
    applyGenders(gendersDefaultState);
  };

  const applyFilters = () => {
    applyGenders(genders);
  };

  useEffect(() => {
    selectGenders(genderGlobal);
  }, [genderGlobal]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useImperativeHandle(
    ref,
    () => ({
      clearFilters,
      applyFilters,
    }),
    [genders]
  );

  const handleGenderToggle = (gender: string) => {
    const updatedGenders = {
      ...genders,
      [gender]: !(genders[gender as keyof GendersProps] as boolean),
    };
    selectGenders(updatedGenders);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-txt-tertiary text-lg mt-[10px] cursor-default">
          Gender:
        </h1>
        {Object.values(genders).every((v) => v === false) ? (
          <h2 className="me-5 mt-3 text-sm text-txt-onerror-secondary">
            Pick at least 1 gender!
          </h2>
        ) : (
          <h2 className="me-5 mt-3 text-sm text-txt-queternary">
            {Object.values(genders).filter((v) => v === true).length}
          </h2>
        )}
      </div>
      <div className="my-3 grid grid-cols-3 gap-2">
        <OptionButton
          active={genders.male}
          action={() => handleGenderToggle("male")}
          name="Male"
          specialIcon="male"
        />
        <OptionButton
          name="Female"
          active={genders.female}
          specialIcon="female"
          action={() => handleGenderToggle("female")}
        />
        <OptionButton
          name="Other"
          active={genders.other}
          specialIcon="transgender"
          action={() => handleGenderToggle("other")}
        />
      </div>
    </div>
  );
});

GenderFilter.displayName = "GenderFilter";
