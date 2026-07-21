import { NavLink } from "react-router-dom";
import { FaMagnifyingGlass, FaCartShopping, FaUser } from "react-icons/fa6";
import logo from "../assets/imglogo-removebg-preview.png";

function Navbar() {
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
          <span>Kids</span>
        </li>

        <li>
          <span>Sale</span>
        </li>
      </ul>

      <div className="nav-icons">
        <FaMagnifyingGlass />
        <FaCartShopping />
        <FaUser />
      </div>
    </nav>
  );
}

export default Navbar;