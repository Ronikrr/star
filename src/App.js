import './App.css';
import Homepage from './pages/Homepage';
import Footer from './components/inc/Footer';
import About from './pages/About'
import MainHeader from './components/inc/Header';
import DiamondJewelry from './pages/product/DiamondJewelry';
import LabGrownDiamonds from './pages/product/LabGrownDiamonds';
import Naturaldiaonds from './pages/product/Naturaldiaonds';
import Inquireloosediamond from './pages/Inquireloosediamond';
import Contactuspage from './pages/Contactuspage';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dimondguide from './pages/Dimondguide';
import Privacypolicy from './pages/Privacypolicy';
import Termsandcondition from './pages/Termsandcondition';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthHeader from './components/inc/AuthHeader';

function App() {
  const location = useLocation();
  const authRoutes = ['/login', '/signup', '/privacy-policy', '/terms'];

  const isAuthRoute = authRoutes.includes(location.pathname);
  return (
    <>
      {isAuthRoute ? <AuthHeader /> : <MainHeader />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-products/DiamondJewelry" element={<DiamondJewelry />} />
        <Route path="/our-products/LabGrownDiamonds" element={<LabGrownDiamonds />} />
        <Route path="/our-products/Naturaldiaonds" element={<Naturaldiaonds />} />
        <Route path="/inquiry" element={<Inquireloosediamond />} />
        <Route path="/contact-us" element={<Contactuspage />} />
        <Route path="/guide" element={<Dimondguide />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/terms" element={<Termsandcondition />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
