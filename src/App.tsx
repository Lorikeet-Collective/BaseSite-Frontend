import { Routes, Route, Navigate } from "react-router";

const App: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<div>Hello World!</div>} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
