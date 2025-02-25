import "../styles/MainMenu.css"
import {MainMenuItem, MainMenuItemProps} from "./MainMenuItem.tsx";
import {PAGES} from "../pages/pages.ts";
import {LanguageSwitcher} from "./LanguageSwitcher.tsx";

type MainMenuProps = {
    setLanguage: (lang: string) => void;
}

export const MainMenu = ({setLanguage}: MainMenuProps) => {
    const menuItems = PAGES.reduce<MainMenuItemProps[]>((menuItems, page) => {
        return [...menuItems, { label: page.id, id: page.id }];
    }, []);

    return (
        <div className={"main-menu"}>
            {menuItems.map((menuItem, i) => <MainMenuItem key={i} label={menuItem.label} id={menuItem.id} />)}
            <LanguageSwitcher setLanguage={setLanguage} />
        </div>
    )
}