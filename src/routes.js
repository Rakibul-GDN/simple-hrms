import {useRoutes, Navigate} from "react-router-dom"
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";

const Router = () => {
    return(
        useRoutes([
            {
                path: "/", element: <Navigate to="dashboard"/>
            },
            {
                path: "/dashboard",
                element:<Layout/>,
                children:[
                    {path: "", element: <Navigate to={"/dashboard/home"}/> },
                    {path: "home", element: <HomePage/>},
                ]
            }
        ])
    )
}

export default Router;