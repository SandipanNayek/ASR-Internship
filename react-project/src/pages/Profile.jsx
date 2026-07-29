import { FaUser, FaEnvelope, FaHeart, FaCartShopping, FaRightFromBracket } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Please Login First</h2>
          <button onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-avatar">
          <FaUser />
        </div>

        <h2>{user.name}</h2>

        <p className="profile-email">
          <FaEnvelope />
          {user.email}
        </p>

        <div className="profile-options">

          <div
            className="profile-option"
            onClick={() => navigate("/wishlist")}
          >
            <FaHeart />
            Wishlist
          </div>

          <div
            className="profile-option"
            onClick={() => navigate("/cart")}
          >
            <FaCartShopping />
            Cart
          </div>

          <div
            className="profile-option logout"
            onClick={handleLogout}
          >
            <FaRightFromBracket />
            Logout
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;