import { createStore } from "zustand";

export type SalesState = {
    orders: Array<OrderState>;
}

export type SalesActions = {
    addOrder: (order: OrderModuleProps) => void;
    removeOrder: (id: string) => void;
    updateOrderAttachments: (id: string, attachment?: File) => void;
    updateOrderStatus: (id: string, updatedStatus: string) => void;
}

export type SalesStore = SalesState & SalesActions;

export const defaultInitState: SalesState = {
    orders: [],
}

export const createSalesStore = (
    initState: SalesState = defaultInitState,
) => {
    return createStore<SalesStore>()((set)=> ({
        ...initState,
        addOrder(order) {
            set((state)=> ([...state, order]))
        },
        removeOrder(id) {
            set((state) => (state.orders.filter(order => order.uuid != id)))
        },
        updateOrderAttachments(id, attachment) {
            set((state) => ())
        },
    }))
}