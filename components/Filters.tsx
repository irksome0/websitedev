"use client";

import Image from "next/image";
import filtersIcon from "@/public/filter-icon.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiltersModal } from "./FiltersModal";
import { createPortal } from "react-dom";
import { buttonVariants } from "./variants/buttonsVariants";
import { useFitlersStore } from "@/providers/filtersStoreProvider";

export const Filters = () => {
  const gendersFilter = useFitlersStore((state) => state.genders);
  const locationsFilter = useFitlersStore((state) => state.countries);
  const collaborationsFilter = useFitlersStore((state) => state.collaborations);

  const [amountOfFilters, setAmountOfFilters] = useState<number>();
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const openModal = () => {
    setDisplayModal((prev) => !prev);
  };

  useEffect(() => {
    const gendersToggled = Object.values(gendersFilter).filter(
      (v) => v === true
    ).length;
    const locationsToggled = locationsFilter.length;
    const collaborationsToggled = Object.values(collaborationsFilter).filter(
      (v) => v === true
    ).length;
    setAmountOfFilters(
      gendersToggled + locationsToggled + collaborationsToggled
    );
  }, [gendersFilter, locationsFilter, collaborationsFilter]);

  return (
    <div>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={openModal}
        className="flex cursor-pointer outline-border-primary outline-offset-2 outline-2 focus: z-10 flex-row items-center justify-center gap-1 rounded-[20px] border bg-bg-secondary px-5 py-2 font-medium text-button text-txt-secondary"
      >
        <Image width={24} height={24} src={filtersIcon} alt="Filters" />
        Filters
        {amountOfFilters ? `(${amountOfFilters})` : <div />}
      </motion.button>
      {displayModal &&
        createPortal(
          <FiltersModal
            closeModal={() => openModal()}
            // getFilters={(val) => setAmountOfFilters(val)}
          />,
          document.body
        )}
    </div>
  );
};
