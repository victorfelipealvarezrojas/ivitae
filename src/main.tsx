import React from 'react'
import ReactDOM from 'react-dom/client'
import ContainerApp from './Container.tsx'
import { AppProvider } from './infrastructure/Context.tsx'

import './main.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <ContainerApp />
    </AppProvider>
  </React.StrictMode>
);