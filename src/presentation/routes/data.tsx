import { createBrowserRouter } from "react-router-dom"
import {
    Fa500Px,
    FaAccusoft,
    FaDocker,
    FaGithubSquare,
} from 'react-icons/fa';
import { nanoid } from 'nanoid';
import { HomeTemplate } from "../components/template/HomeTemplate";
import { Distribuidos } from "../components/template/Distribuidos";
import { DocumentationTemplate } from "../components/template/DocumentationTemplate";

export const sublinks = [
    {
        pageId: nanoid(),
        page: 'Arquitectura de software',
        links: [
            {
                id: nanoid(),
                label: 'Microservicios',
                icon: <Fa500Px />,
                url: '/document/mic',
                component: <p>arquitectura</p>,
            },
            {
                id: nanoid(),
                label: 'Monolitica',
                icon: <FaAccusoft />,
                url: '/document/mono',
                component: <p>arquitectura2</p>,
            },
        ],
    },
    {
        page: 'Patrones de diseño y Paradigmas',
        pageId: nanoid(),
        links: [
            {
                id: nanoid(),
                label: 'Basicos',
                icon: <FaDocker />,
                url: '/document/bsic',
                component: <p>arquitectura</p>,
            },
            {
                id: nanoid(),
                label: 'Sistemas Distribuidos',
                icon: <FaGithubSquare />,
                url: '/document/dist',
                component: <Distribuidos />,
            },
        ],
    },
];


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeTemplate />,
    },
    {
        path: "/document",
        element: <DocumentationTemplate />,
        children: [
            {
                path: "",
                element: <p>Root</p>,
            },
            ...sublinks.flatMap(route =>
                route.links.map(link => ({
                    path: link.url.replace('/document/', ''),
                    element: link.component
                }))
            )
        ]
    },

])



export default sublinks;