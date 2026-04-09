import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Pay from '../page/payment/Pay.jsx'
import Fslts from '../page/fasilitas/Fslts.jsx'
import Tampak from '../page/tampak/tampak.jsx'
import Dguru from '../page/dGuru/dGuru.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from '../App.jsx'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  
    

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/payment' element={<Pay/>} />
      <Route path='/fasilitas' element={<Fslts/>} />
      <Route path='/3d' element={<Tampak/>} />
      <Route path='/daftar-guru' element={<Dguru/>} />

    </Routes>
    
  
  </BrowserRouter>,
)

