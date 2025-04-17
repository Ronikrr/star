import './App.css';
import Homepage from './pages/Homepage';
import Footer from './components/inc/Footer';
import About from './pages/About'
import Header from './components/inc/Header';
import DiamondJewelry from './pages/product/DiamondJewelry';
import LabGrownDiamonds from './pages/product/LabGrownDiamonds';
import Naturaldiaonds from './pages/product/Naturaldiaonds';
import Inquireloosediamond from './pages/Inquireloosediamond';
import Contactuspage from './pages/Contactuspage';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-products/DiamondJewelry" element={<DiamondJewelry />} />
        <Route path="/our-products/LabGrownDiamonds" element={<LabGrownDiamonds />} />
        <Route path="/our-products/Naturaldiaonds" element={<Naturaldiaonds />} />
        <Route path="/inquiry" element={<Inquireloosediamond />} />
        <Route path="/contact-us" element={<Contactuspage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
