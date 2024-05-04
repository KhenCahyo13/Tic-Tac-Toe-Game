import { memo } from "react";
import { HasContextsProps } from "./HasContexts.type";
import { GlobalContext, initialState } from "@/hooks/useGlobalContext";

const HasContextsView: React.FC<HasContextsProps> = ({ children }) => (
    <>
        <GlobalContext.Provider value={initialState}>
            {children}
        </GlobalContext.Provider>
    </>
);

export default memo(HasContextsView);