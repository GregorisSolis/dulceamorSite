import logo from "../../assets/logo.png";
import "./navbar.css";
import imageBack from "../../assets/back.png";

export function Navbar() {

  let pathname = location.pathname

  return (
    <nav className="navbar">
      <figure className="logo">
        <img src={logo} alt="logo de dulce amor" />
      </figure>
      {pathname != '/' ? 
            <a href="/" className="btnBack">
            <img src={imageBack} alt="icone de volver" />
          </a>
          : null
      }
    </nav>
  );
}
