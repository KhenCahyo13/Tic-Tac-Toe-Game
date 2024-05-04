import { GlobalContext as GlobalContextType } from "@/types/context";
import { createContext, useContext } from "react";

export const initialState: GlobalContextType = {
    isStart: false,
    level: 'Easy'
};

export const GlobalContext = createContext(initialState);
export const useGlobalContext = () => useContext(GlobalContext);