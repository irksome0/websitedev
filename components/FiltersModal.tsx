"use client";

import { motion } from "framer-motion";
import {
  applyButtonVariants,
  buttonVariants,
} from "./variants/buttonsVariants";
import { CountryFilter } from "./CountryFilter";
import { GenderFilter } from "./GenderFilter";
import { CollaborationFilter } from "./CollaborationFilter";
import { useRef } from "react";

export const FiltersModal = (props: FiltersModalProps) => {
  const collaborationFiltersRef = useRef<any>();
  const genderFiltersRef = useRef<any>();
  const countryFiltersRef = useRef<any>();

  const clearAllFilters = () => {
    if (
      collaborationFiltersRef.current &&
      genderFiltersRef.current &&
      countryFiltersRef.current
    ) {
      collaborationFiltersRef.current.clearFilters();
      genderFiltersRef.current.clearFilters();
      countryFiltersRef.current.clearFilters();
    }
  };
  const applyFilters = () => {
    if (
      collaborationFiltersRef.current &&
      genderFiltersRef.current &&
      countryFiltersRef.current
    ) {
      // console.log(
      //   collaborationFiltersRef.current,
      //   genderFiltersRef.current,
      //   countryFiltersRef.current
      // );
      genderFiltersRef.current.applyFilters();
      countryFiltersRef.current.applyFilters();
      collaborationFiltersRef.current.applyFilters();
      props.closeModal();
    }
  };

  return (
    <motion.div className="flex flex-col items-end justify-center absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.2)]">
      <motion.div
        className="flex flex-col w-[420px] max-h-[850px] overflow-auto font-medium bg-bg-primary rounded-3xl border-border-secondary p-6"
        initial={{ type: "spring", x: 0 }}
        animate={{ type: "spring", x: "-20%" }}
      >
        <div className="flex flex-row justify-between mb-6">
          <h1 className="text-txt-tertiary text-lg mt-[10px] cursor-default">
            Filter:
          </h1>
          <motion.button
            className="focus:z-10 outline-border-primary outline-offset-2 outline-2 material-symbols-outlined bg-bg-secondary w-10 h-10 text-txt-secondary p-1 rounded-full border-2"
            whileHover="hover"
            whileTap="tap"
            onClick={() => props.closeModal()}
            variants={buttonVariants}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            close
          </motion.button>
        </div>
        <CountryFilter ref={countryFiltersRef} />
        <hr className="text-txt-tertiary" />
        <GenderFilter ref={genderFiltersRef} />
        <hr className="text-txt-tertiary" />
        <CollaborationFilter ref={collaborationFiltersRef} />
        <hr className="text-txt-tertiary pb-3" />

        <div className="inline-flex justify-center gap-3">
          <motion.button
            className="focus:z-10 outline-border-primary outline-offset-2 outline-2 bg-bg-secondary text-txt-secondary px-4 py-3 rounded-xl border-2"
            whileHover="hover"
            whileTap="tap"
            animate="initial"
            onClick={() => clearAllFilters()}
            variants={buttonVariants}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            Clear all
          </motion.button>
          <motion.button
            className="focus:z-10 outline-border-brand-primary w-3/5 outline-offset-2 outline-2 bg-bg-button-brand-secondary text-txt-onbrand-secondary px-4 py-3 rounded-xl border-2"
            whileHover="hover"
            whileTap="tap"
            animate="initial"
            onClick={() => applyFilters()}
            variants={applyButtonVariants}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            Apply filters
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
