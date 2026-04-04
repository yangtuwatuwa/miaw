import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Pay from '../page/payment/Pay.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from '../App.jsx'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <StrictMode>
    

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/payment' element={<Pay/>} />
    </Routes>
    
  </StrictMode>
  </BrowserRouter>,
)

