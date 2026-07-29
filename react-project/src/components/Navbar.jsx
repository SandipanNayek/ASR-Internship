import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaUser,
} from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

import logo from "../assets/imglogo-removebg-preview.png";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate("/");
  };

  return (
    <nav>
      {/* Logo */}

      <div className="logo">
        <img src={logo} alt="Jumpman Logo" />
        <h4>JUMPMAN</h4>
      </div>

      {/* Navigation */}

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Men
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Women
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Kids
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sale"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Sale
          </NavLink>
        </li>
      </ul>

      {/* Right Side */}

      <div className="nav-icons">
        {/* Search */}

        <div className="search-container">
          {showSearch && (
            <input
              type="text"
              placeholder="Search shoes..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              autoFocus
            />
          )}

          <FaMagnifyingGlass
            className="search-icon"
            onClick={() =>
              setShowSearch(!showSearch)
            }
          />
        </div>

        {/* Wishlist */}

        <NavLink
          to="/wishlist"
          className="icon-wrapper"
        >
          <FaRegHeart />

          {wishlist.length > 0 && (
            <span className="icon-count">
              {wishlist.length}
            </span>
          )}
        </NavLink>

        {/* Cart */}

        <NavLink
          to="/cart"
          className="icon-wrapper"
        >
          <FaCartShopping />

          {cart.length > 0 && (
            <span className="icon-count">
              {cart.length}
            </span>
          )}
        </NavLink>

        {/* Profile */}

        <div className="profile-container">
          <div
            className="profile-icon"
            onClick={() =>
              setShowProfileMenu(!showProfileMenu)
            }
          >
            <FaUser />
          </div>

          {showProfileMenu && (
            <div className="profile-dropdown">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <div className="profile-name">
                    {user.name}
                  </div>

                  <Link
                    to="/profile"
                    onClick={() =>
                      setShowProfileMenu(false)
                    }
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;