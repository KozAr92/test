import "./styles/Background.css"
import backgroundImage from "/images/background.JPG?url"
import * as React from "react";

type BackgroundProps = {
    children: React.ReactNode;
};

export const Background = ({children}: BackgroundProps) => {
    return <div className={"background"} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {children}
    </div>
}