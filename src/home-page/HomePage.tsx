import "../styles/HomePage.css"
import {FormattedMessage} from "react-intl";

export const HomePage = () => {
    return(
        <div className="home-page">
            <div className={"home-header"}>
            <div className={"page-title"}><FormattedMessage id={"page-title"} defaultMessage={"Artur Koza"}/></div>
            {/*<div className={"page-subtitle"}><FormattedMessage id={"page-subtitle"} defaultMessage={"Conductor"}/></div>*/}
            </div>
        </div>
    )
}