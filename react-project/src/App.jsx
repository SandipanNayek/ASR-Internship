import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import Cart from "./pages/Cart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;