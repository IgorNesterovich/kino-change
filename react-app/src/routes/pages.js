import Page from "../pages/Page";
import Home from "../pages/Home";
import Films from "../pages/Films";
import FilmsAll from "../components/films/FilmsAll";
import FilmsPopular from "../components/films/FilmsPopular";
import FilmsTop from "../components/films/FilmsTop"; 
import Film from "../components/films/Film";
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
                children: [
                    {
                        path: '/films/all',
                        element: <FilmsAll />,
                    },
                    {
                        path: '/films/popular',
                        element: <FilmsPopular />,
                    },
                    {
                        path: '/films/top',
                        element: <FilmsTop />,
                    }
                ]
            },
            {
                path: '/films/:id',
                element: <Film />,
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