import React, {useEffect, useState} from "react";
import { PageContext } from "./PageContext.tsx";

type PageContextProviderProps = {
    translations: { [key: string]: string };
    children: React.ReactNode;
};

export const PageContextProvider = ({translations, children  }: PageContextProviderProps) => {
    const [activePage, setActivePage] = useState<string | undefined>(undefined);

    const isMobile = () => {
        const width = window.innerWidth;
        return width < 768;
    };

    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(isMobile());

    useEffect(() => {
        const handleResize = () => {
            setIsMobileDevice(isMobile());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <PageContext.Provider value={{ activePage, setActivePage, isMobileDevice, translations }}>
            {children}
        </PageContext.Provider>
    );
};
