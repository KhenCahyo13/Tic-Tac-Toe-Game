import { ReactNode } from "react";

export interface Route {
    label: string;
    path: string;
    element: ReactNode;
}