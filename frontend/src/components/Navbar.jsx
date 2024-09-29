import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../style.scss";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="links">
            <Link className="link" to={"/?category=art"}>
              <h6>ART</h6>
            </Link>
            <Link className="link" to={"/?category=science"}>
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to={"/?category=technology"}>
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to={"/?category=food"}>
              <h6>FOOD</h6>
            </Link>
            <Link className="link" to={"/?category=sports"}>
              <h6>SPORTS</h6>
            </Link>
            <span>{user?.username}</span>
            {user ? (
              <span onClick={handleLogout}>Logout</span>
            ) : (
              <Link className="link" to={"/login"}>
                Login
              </Link>
            )}{" "}
            <span className="write">
              <Link className="link" to={"/upload"}>
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
