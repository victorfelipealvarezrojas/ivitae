import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import { HomeTemplate } from './presentation/components/template/HomeTemplate'

import './container.css'



import Navbar from "./NavBar"
import Sidebar from "./Sidebar"
import Submenu from "./Submenu"
import sublinks, { router } from './presentation/routes/data';



function ContainerApp() {


  return (
    <RouterProvider router={router} />
  )
}

export default ContainerApp