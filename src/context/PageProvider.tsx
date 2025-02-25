import React, { useState } from "react";
import { PageContext } from "./PageContext.tsx";

type PageContextProviderProps = {
    translations: { [key: string]: string };
    children: React.ReactNode;
};

export const PageContextProvider = ({translations, children  }: PageContextProviderProps) => {
    const [activePage, setActivePage] = useState<string | undefined>(undefined);

    return (
        <PageContext.Provider value={{ activePage, setActivePage, translations }}>
            {children}
        </PageContext.Provider>
    );
};
