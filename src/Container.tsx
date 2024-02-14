import { RouterProvider } from 'react-router-dom';
import { router } from './presentation/routes/data';

import './container.css';


function ContainerApp() {


  return (
    <RouterProvider router={router} />
  )
}

export default ContainerApp