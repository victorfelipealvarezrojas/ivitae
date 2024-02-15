import { Outlet, createBrowserRouter } from "react-router-dom"

import {
    Fa500Px,
    FaAccusoft,
    FaAdversal,
    FaDocker,
    FaGithubSquare,
} from 'react-icons/fa';
import { nanoid } from 'nanoid';
import Hero from '../../Hero';
import { Architectura } from '../../Architectura';
import { HomeTemplate } from "../components/template/HomeTemplate";
import Navbar from "../../NavBar";
import Sidebar from "../../Sidebar";
import Submenu from "../../Submenu";

export const sublinks = [
    {
        pageId: nanoid(),
        page: 'document',
        links: [
            {
                id: nanoid(),
                label: 'Arquitectura',
                icon: <Fa500Px />,
                url: '/document/arq',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'content',
                icon: <FaAccusoft />,
                url: '/document/hero',
                component: <Architectura />,
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/document/outbox',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/document/outbox',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/document/outbox',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/document/outbox',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/document/outbox',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/document/outbox',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: '/document/outbox',
                component: <Hero />,
            },
        ],
    },
    {
        page: 'resources',
        pageId: nanoid(),
        links: [
            {
                id: nanoid(),
                label: 'starters',
                icon: <FaDocker />,
                url: '/document/starters',
                component: <Hero />,
            },
            {
                id: nanoid(),
                label: 'showcase',
                icon: <FaGithubSquare />,
                url: '/document/showcase',
                component: <Hero />,
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
        element: <>
            <Navbar />
            <Sidebar />
            <Submenu />
            <section className="content">
                <div className="">
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </section>
        </>,
        children: [
            ...sublinks.flatMap(route =>
                route.links.map(link => ({
                    path: link.url.replace('/document/', ''),
                    element: link.component
                }))
            ),
            {
                path: "",
                element: <Hero />
            }
        ]
    },

])



export default sublinks;