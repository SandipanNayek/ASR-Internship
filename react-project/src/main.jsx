import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="dark"
            />
          </BrowserRouter>
        </CartProvider>
    </WishlistProvider>
  </StrictMode>
);