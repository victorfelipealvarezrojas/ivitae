import { Outlet } from "react-router-dom"
import Navbar from "../molecules/navbar/NavBar"
import Sidebar from "../molecules/sidebar/Sidebar"
import Submenu from "../organism/submenu/Submenu"

import './documentationTemplate.css'

export const DocumentationTemplate = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Submenu />
            <Outlet />
            <section className="content">
            </section>
        </>
    )
}
