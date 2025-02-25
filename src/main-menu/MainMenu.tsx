import "../styles/MainMenu.css"
import {MainMenuItem} from "./MainMenuItem.tsx";
import {PAGES} from "../pages/pages.ts";
import {LanguageSwitcher} from "./LanguageSwitcher.tsx";

type MainMenuProps = {
    setLanguage: (lang: string) => void;
}

export const MainMenu = ({setLanguage}: MainMenuProps) => {
    const menuItems = PAGES.reduce<string[]>((pagesIds, page) => {
        return [...pagesIds, page.id];
    }, []);

    return (
        <div className={"main-menu"}>
            {menuItems.map((pageId, i) => <MainMenuItem key={i} id={pageId} />)}
            <LanguageSwitcher setLanguage={setLanguage} />
        </div>
    )
}