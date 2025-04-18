import "./App.css";
import Homepage from "./pages/Homepage";
import Footer from "./components/inc/Footer";
import About from "./pages/About";
import MainHeader from "./components/inc/Header";
import DiamondJewelry from "./pages/product/DiamondJewelry";
import LabGrownDiamonds from "./pages/product/LabGrownDiamonds";
import Naturaldiaonds from "./pages/product/Naturaldiaonds";
import Inquireloosediamond from "./pages/Inquireloosediamond";
import Contactuspage from "./pages/Contactuspage";
import { Routes, Route, useLocation } from "react-router-dom";
import Dimondguide from "./pages/Dimondguide";
import Privacypolicy from "./pages/Privacypolicy";
import Termsandcondition from "./pages/Termsandcondition";
import AuthHeader from "./components/inc/AuthHeader";
import PageTitle from "./components/ui/PageTitle";
import ScrollToTop from "./components/ui/ScrollToTop";
function App() {
  const location = useLocation();
  const authRoutes = ["/privacy-policy", "/terms"];

  const isAuthRoute = authRoutes.includes(location.pathname);
  return (
    <>
      <ScrollToTop />
      {isAuthRoute ? <AuthHeader /> : <MainHeader />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title={"Home Page"} />
              <Homepage />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <PageTitle title={"About Page"} />
              <About />
            </>
          }
        />
        <Route
          path="/our-products/DiamondJewelry"
          element={
            <>
              <PageTitle title={"Diamond Jewelry"} />
              <DiamondJewelry />
            </>
          }
        />
        <Route
          path="/our-products/LabGrownDiamonds"
          element={
            <>
              <PageTitle title={"Lab Grown Diamonds"} />
              <LabGrownDiamonds />
            </>
          }
        />
        <Route
          path="/our-products/Naturaldiaonds"
          element={
            <>
              <PageTitle title={"Natural Diamond"} />
              <Naturaldiaonds />
            </>
          }
        />
        <Route
          path="/inquiry"
          element={
            <>
              <PageTitle title={"Inquire for loose diamond"} />
              <Inquireloosediamond />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <PageTitle title={"Contact Us"} />
              <Contactuspage />
            </>
          }
        />
        <Route
          path="/guide"
          element={
            <>
              <PageTitle title={"Guidelines"} />
              <Dimondguide />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <PageTitle title={"Privacy policy"} />
              <Privacypolicy />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <PageTitle title={"Terms & conditions"} />
              <Termsandcondition />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
