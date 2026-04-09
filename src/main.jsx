import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './route.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import PpdbPage from './pages/ppdb/PpdbPage.jsx'

createRoot(document.getElementById('root')).render(

    <StrictMode>
      <AppRoutes />   
    </StrictMode>
 ,
)
