import { Logo } from "../assets/logo.png";
function Footer() {
  return (
    <>
      <footer>
        <img src={Logo} alt="" />
        <span>
          Made with ❤️ and <b>ReactJS</b>.
        </span>
      </footer>
    </>
  );
}

export default Footer;
