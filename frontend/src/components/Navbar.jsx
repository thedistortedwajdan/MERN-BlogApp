import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../style.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="links">
            <Link className="link" to={"/category=art"}>
              <h6>ART</h6>
            </Link>
            <Link className="link" to={"/category=science"}>
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to={"/category=technology"}>
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to={"/category=food"}>
              <h6>FOOD</h6>
            </Link>
            <Link className="link" to={"/category=sports"}>
              <h6>SPORTS</h6>
            </Link>
            <span>John</span>
            <span>Logout</span>
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
