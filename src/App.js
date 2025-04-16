import './App.css';
import Homepage from './pages/Homepage';
import Footer from './components/inc/Footer';
import About from './pages/About'
import Header from './components/inc/Header';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
