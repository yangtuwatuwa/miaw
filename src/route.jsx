import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pay from './pages/payment/Pay'
import Fasilitas from './pages/fasilitas/Fslts'
import HomePage from './pages/HomePage';
import Galeri from './pages/galeri/Galeri';
import Guru from './pages/dGuru/dGuru'
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/galeri' element={<Galeri/>}/>
        <Route path='/payment' element={<Pay/> }/>
        <Route path='/fasilitas' element={<Fasilitas/>}/>
        <Route path='/guru' element={<Guru/>}/>
      </Routes>
    </Router>
  );
}