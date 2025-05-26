import { Routes, Route, Navigate } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
