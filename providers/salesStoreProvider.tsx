"use client";

import { createSalesStore, type SalesStore } from "@/stores/salesStore/store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type SalesStoreApi = ReturnType<typeof createSalesStore>;

export const SalesStoreContext = createContext<SalesStoreApi | undefined>(
  undefined
);

export interface SalesStoreProviderProps {
  children: ReactNode;
}

export const SalesStoreProvider = ({ children }: SalesStoreProviderProps) => {
  const storeRef = useRef<SalesStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSalesStore();
  }
  return (
    <SalesStoreContext.Provider value={storeRef.current}>
      {children}
    </SalesStoreContext.Provider>
  );
};

export const useSalesStore = <T,>(selector: (store: SalesStore) => T): T => {
  const salesStoreContext = useContext(SalesStoreContext);
  if (!salesStoreContext) {
    throw new Error("useSalesStore must be used within SalesStoreProvider");
  }

  return useStore(salesStoreContext, selector);
};
