"use client";

import { useSalesStore } from "@/providers/salesStoreProvider";

export const getAmountOfSales = (): number => {
    const sales = useSalesStore(state => state.orders)
    console.log(sales.length)
    return sales.length;
}