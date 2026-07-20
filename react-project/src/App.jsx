import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
    </Routes>
  );
}

export default App;