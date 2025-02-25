import {FormattedMessage} from "react-intl";

export type MainMenuItemProps = {
    label: string;
    id: string;
}

export const MainMenuItem = ({label, id}: MainMenuItemProps) => {
    console.log(id)
    console.log(label)
    return (
        <div className={"main-menu-item"}>
            <FormattedMessage id={label} defaultMessage={id}/>
        </div>
    )
}