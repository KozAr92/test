import * as React from "react";
import {GhostPage} from "./GhostPage.tsx";

export type MainPage = {
    id: string;
    page: React.ComponentType;
    className?: string;
};

export const PAGES: MainPage[] = [
    {id: "about", page: GhostPage, className: "about-page"},
    {id: "events", page: GhostPage, className: "events-page"},
    {id: "reviews", page: GhostPage, className: "reviews-page"},
    {id: "contact", page: GhostPage, className: "contact-page"},
]