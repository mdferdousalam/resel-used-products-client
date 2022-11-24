import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorElement from "../pages/ErrorPage/ErrorElement";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;