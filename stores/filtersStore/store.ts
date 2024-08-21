
import { createStore } from "zustand";

export type FiltersState = {
    countries: Array<string>
    genders: GendersProps
    collaborations: CollaborationState
}

export type FiltersActions = {
    applyGenders: (g: GendersProps) => void;
    applyCountries: (c: Array<string>) => void;
    applyCollaborations: (c: CollaborationState) => void;
    applyFilters: (c: Array<string>, g: GendersProps, cs :CollaborationState) => void;
    clearFilters: () => void;
}


export type FiltersStore = FiltersState & FiltersActions

export const defaultInitState: FiltersState = {
    countries: [],
    genders: {male:false, female:false, other: false},
    collaborations: {m4a:false,m4f:false,m4m:false,f4a:false,f4f:false,f4m:false,fm4f:false,fm4m:false, t4a:false,t4f:false,t4m:false,a4a:false}
}

export const createFiltersStore = (
    initState: FiltersState = defaultInitState, 
) => {
    return createStore<FiltersStore>()((set) => ({
        ...initState,
        applyCollaborations(c) {
            set((state) => ({...state, collaborations: c}))
        },
        applyCountries(c) {
            set((state) => ({...state, countries: c}))
        },
        applyGenders(g) {
            set((state) => ({...state, genders: g}))
        },
        applyFilters(c, g, cs) {
            set((_state) => ({countries: c, genders: g, collaborations: cs}))
        },
        clearFilters() {
            set((_state)=> (defaultInitState))
        },
    }))
}