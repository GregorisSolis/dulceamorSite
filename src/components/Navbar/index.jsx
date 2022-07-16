import logo from "../../assets/logo.png";
import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <figure className="logo">
        <img src={logo} alt="logo de dulce amor" />
      </figure>
    </nav>
  );
}
