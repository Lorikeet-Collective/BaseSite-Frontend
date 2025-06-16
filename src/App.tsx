import { Routes, Route, Navigate } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home";
import Philosophy from "./views/Philosophy";
import Insurance from "./views/Insurance";
import Resources from "./views/Resources";

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
