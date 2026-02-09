import { createContext, useContext, useRef, useState, type ReactNode } from "react";

interface OpenContextType {
    openMenu: boolean;
    SetOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    btnRef: React.RefObject<HTMLButtonElement | null>;
}
const Open = createContext<OpenContextType | null>(null);

export const ContextOpen = ({ children }: { children: ReactNode }) => {
    const [openMenu, SetOpenMenu] = useState<boolean>(false);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    return <Open.Provider value={{ openMenu, SetOpenMenu, btnRef }}>
        {children}
    </Open.Provider>
}


export const ClickOpenMenu = () => {
    const context = useContext(Open);
    if (!context) {
        throw new Error("ClickOpenMenu must be used within a ContextOpen provider");
    }
    return context;
};