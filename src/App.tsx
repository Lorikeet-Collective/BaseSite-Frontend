import { Routes, Route, Navigate, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home";
import Philosophy from "./views/Philosophy";
import Insurance from "./views/Insurance";
import Resources from "./views/Resources";
import Services from "./views/Services";
import ContactUs from "./views/ContactUs";

const App: React.FC = (): React.ReactElement => {
  const location = useLocation();

  useEffect(() => window.scrollTo({ top: 0 }), [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
