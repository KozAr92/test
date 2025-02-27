import "../styles/MainMenu.css"
import {MainMenuItem} from "./MainMenuItem.tsx";
import {PAGES} from "../pages/pages.ts";
import {LanguageSwitcher} from "./LanguageSwitcher.tsx";
import {useContext} from "react";
import {PageContext} from "../context/PageContext.tsx";

type MainMenuProps = {
    setLanguage: (lang: string) => void;
}

export const MainMenu = ({setLanguage}: MainMenuProps) => {
    const {isMobileDevice, showMenu, setShowMenu} = useContext(PageContext);
    const menuItems = PAGES.reduce<string[]>((pagesIds, page) => {
        return [...pagesIds, page.id];
    }, []);

    const handleClick = () => {
        console.log(showMenu);
        console.log("Clicked")
        setShowMenu(!showMenu);
    }

    return (
        <div className={"main-menu"}>
            <button className={"mobile-menu-button"} style={{rotate: "90deg"}} onClick={handleClick}>|||</button>
            {!isMobileDevice && menuItems.map((pageId, i) => <MainMenuItem key={i} id={pageId} />)}
            {isMobileDevice && <div className={"mobile-menu"}>
                {showMenu && <div className={"mobile-menu-content"}>
                    {menuItems.map((pageId, i) => <MainMenuItem key={i} id={pageId}/>)}
                </div>}
            </div>}
            <LanguageSwitcher setLanguage={setLanguage} />
        </div>
    )
}