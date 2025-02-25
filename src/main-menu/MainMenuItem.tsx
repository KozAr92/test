import {FormattedMessage} from "react-intl";
import {useContext} from "react";
import {PageContext} from "../context/PageContext.tsx";

export type MainMenuItemProps = {
    id: string;
}

export const MainMenuItem = ({id}: MainMenuItemProps) => {
    const {setActivePage} = useContext(PageContext);

    const handleSelect = () => {
        setActivePage(id)
    }
    return (
        <div className={"main-menu-item"} onClick={handleSelect}>
            <FormattedMessage id={id} defaultMessage={id}/>
        </div>
    )
}