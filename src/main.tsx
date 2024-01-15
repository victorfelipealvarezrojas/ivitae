import React from 'react'
import ReactDOM from 'react-dom/client'
import ContainerApp from './Container.tsx'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContainerApp />
  </React.StrictMode>
)