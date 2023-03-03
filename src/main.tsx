import React from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./HomePage";
import ThemesPage from "./ThemesPage";
import InventoryPage from "./InventoryPage";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "home",
                element: <HomePage/>,
            },
            {
                path: "themes",
                element: <ThemesPage />,
            },
            {
                path: "inventory",
                element: <InventoryPage />,
            },
        ],
    },
]);

// @ts-ignore
ReactDOMClient.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

