import Page from "../pages/Page";
import Home from "../pages/Home";
import Films from "../pages/Films";
import Serials from "../pages/Serials";

export const pages = [
    {
        path: '/',
        element: <Page />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/films',
                element: <Films />,
            },
            {
                path: '/serials',
                element: <Serials />,
            },
        ]
    },
    {
        path: '*',
        element: <div>Error 404</div>
    }
]