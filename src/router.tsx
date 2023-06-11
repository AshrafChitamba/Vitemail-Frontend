import { createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import PageNotFound from "./Pages/PageNotFound";
import LandingPage from "./Pages/LandingPage";
import Docs from "./Pages/Docs";
import Demo from "./Pages/Demo";
import Sponsor from "./Pages/Sponsor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
           
            {
                path: "docs",
                element: <Docs />,
            },
            {
                path: "demo",
                element: <Demo />,
            },
            {
                path: "sponsor",
                element: <Sponsor />,
            },
           
        ],
    }
]);

export default router;
