import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import DisplayPage from "../Features/DisplayPage";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <DisplayPage />
            },
        ]
    }
]

export const router = createBrowserRouter(routes)