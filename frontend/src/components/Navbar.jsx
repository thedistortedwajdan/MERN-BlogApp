import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="contianer">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="links">links</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
