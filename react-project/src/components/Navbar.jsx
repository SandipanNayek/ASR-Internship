import { NavLink } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaUser,
} from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import logo from "../assets/imglogo-removebg-preview.png";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Jumpman Logo" />
        <span></span>
        <h4>JUMPMAN</h4>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/men"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Men
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Women
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/kids"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kids
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sale"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sale
          </NavLink>
        </li>
      </ul>

      <div className="nav-icons">
        <div className="search-container">
  {showSearch ? (
    <input
      type="text"
      placeholder="Search shoes, brands..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      autoFocus
    />
  ) : null}

  <FaMagnifyingGlass
    className="search-icon"
    onClick={() => setShowSearch(!showSearch)}
  />
</div>

        
        <NavLink to="/wishlist" className="icon-wrapper">
          <FaRegHeart />
          {wishlist.length > 0 && (
            <span className="icon-count">
              {wishlist.length}
            </span>
          )}
        </NavLink>

        
        <NavLink to="/cart" className="icon-wrapper">
          <FaCartShopping />
          {cart.length > 0 && (
            <span className="icon-count">
              {cart.length}
            </span>
          )}
        </NavLink>

      <div className="profile-icon">
      <FaUser />
    </div>
      </div>
    </nav>
  );
}

export default Navbar;