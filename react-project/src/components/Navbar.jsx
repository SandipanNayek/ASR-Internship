import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaUser,
} from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import {
  useState,
  useEffect,
  useRef,
} from "react";

import logo from "../assets/imglogo-removebg-preview.png";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

import menProducts from "../data/menProducts";
import womenProducts from "../data/womenProducts";
import kidsProducts from "../data/kidsProducts";

function Navbar() {
  const {
    cart,
    addToCart,
  } = useCart();

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [showSearch, setShowSearch] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [showProfileMenu, setShowProfileMenu] =
    useState(false);

  const searchRef = useRef(null);

  const allProducts = [
    ...menProducts.map((p) => ({
      ...p,
      page: "/men",
    })),

    ...womenProducts.map((p) => ({
      ...p,
      page: "/women",
    })),

    ...kidsProducts.map((p) => ({
      ...p,
      page: "/kids",
    })),
  ];

  const filteredProducts =
    allProducts.filter((product) =>
      `${product.title} ${product.brand} ${product.category}`
        .toLowerCase()
        .includes(search.trim().toLowerCase())
    );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate("/");
  };

  const handleSearchClick = (product) => {
    navigate(product.page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setSearch("");
    setShowSearch(false);
  };

  return (
    <nav>

      {/* Logo */}

      <div className="logo">
        <img
          src={logo}
          alt="Jumpman Logo"
        />
        <h4>JUMPMAN</h4>
      </div>

      {/* Navigation */}

      <ul className="nav-links">

        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/men">
            Men
          </NavLink>
        </li>

        <li>
          <NavLink to="/women">
            Women
          </NavLink>
        </li>

        <li>
          <NavLink to="/kids">
            Kids
          </NavLink>
        </li>

        <li>
          <NavLink to="/sale">
            Sale
          </NavLink>
        </li>

      </ul>

      {/* Right Side */}

      <div className="nav-icons">

        {/* Search */}

        <div
          className="search-container"
          ref={searchRef}
        >

          <FaMagnifyingGlass
            className="search-icon"
            onClick={() =>
              setShowSearch(!showSearch)
            }
          />

          {showSearch && (
            <div className="search-box">

              <input
                type="text"
                placeholder="Search Nike, Adidas, Puma..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                autoFocus
              />

              {search.trim() !== "" && (
                <div className="search-results">
                  {filteredProducts.length > 0 ? (

  filteredProducts
    .slice(0, 6)
    .map((product) => {

      const isWishlisted = wishlist.some(
        (item) => item.id === product.id
      );

      return (

        <div
          key={`${product.page}-${product.id}`}
          className="search-item"
        >

          <img
            src={product.image}
            alt={product.title}
            onClick={() =>
              handleSearchClick(product)
            }
          />

          <div className="search-info">

            <h4>{product.title}</h4>

            <p>{product.brand}</p>

            <span>₹{product.price}</span>

            <small>{product.category}</small>

            <div className="search-actions">

              <button
                className="search-cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                🛒 Add
              </button>

              <button
                className="search-wishlist-btn"
                onClick={(e) => {
                  e.stopPropagation();

                  if (isWishlisted) {
                    removeFromWishlist(product.id);
                  } else {
                    addToWishlist(product);
                  }
                }}
              >
                {isWishlisted ? "♥" : "♡"}
              </button>

            </div>

          </div>

        </div>

      );
    })

) : (

  <div className="no-search">
    No shoes found.
  </div>

                  )}
                </div>
              )}
            </div>
          )}

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