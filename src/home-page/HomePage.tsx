import "../styles/HomePage.css"
import {FormattedMessage} from "react-intl";
import {PageContext} from "../context/PageContext.tsx";
import {useContext} from "react";

export const HomePage = () => {
    const {showMenu} = useContext(PageContext);
    return(
        <div className="home-page">
            <div className={"home-header"}>
                {!showMenu && <div className={"page-title"}><FormattedMessage id={"page-title"} defaultMessage={"Artur Koza"}/>
                </div>}
            </div>
        </div>
    )
}