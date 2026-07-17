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
          <a href="#" className="active">
            Home
          </a>
        </li>

        <li>
          <a href="#">Men</a>
        </li>

        <li>
          <a href="#">Women</a>
        </li>

        <li>
          <a href="#">Kids</a>
        </li>

        <li>
          <a href="#">Sale</a>
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