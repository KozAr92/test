import React from "react";

type PageContextType = {
    activePage: string | undefined;
    setActivePage: React.Dispatch<React.SetStateAction<string | undefined>>;
    showMenu: boolean;
    setShowMenu:  React.Dispatch<React.SetStateAction<boolean>>;
    isMobileDevice: boolean;
    translations: { [key: string]: string };
};

export const PageContext = React.createContext<PageContextType>({
    activePage: undefined,
    setActivePage: () => {},
    showMenu: false,
    setShowMenu: () => false,
    isMobileDevice: false,
    translations: {},
});