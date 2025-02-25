import "./styles/Background.css"
import backgroundImage from "/images/background.JPG?url"
import backgroundMobile from "/images/background-mobile.jpg?url"
import * as React from "react";
import {PageContext} from "./context/PageContext.tsx";
import {useContext} from "react";

type BackgroundProps = {
    children: React.ReactNode;
};

export const Background = ({children}: BackgroundProps) => {
    const {isMobileDevice} = useContext(PageContext);

    return <div className={"background"} style={{ backgroundImage: `url(${!isMobileDevice ? backgroundImage : backgroundMobile})` }}>
        {children}
    </div>
}