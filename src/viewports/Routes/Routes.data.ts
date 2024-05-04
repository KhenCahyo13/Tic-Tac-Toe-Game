import { Route } from "@/types/routes";
import { createElement, lazy } from "react";

export const publicRoutes: Route[] = [
    {
        label: 'Tic Tac Toe - Start',
        path: '/start',
        element: createElement(lazy(async () => await import('pages/Start'))),
    }
];

export const privateRoutes: Route[] = [
    {
        label: 'Tic Tac Toe - Main',
        path: '/main',
        element: createElement(lazy(async () => await import('pages/Main')))
    }
];