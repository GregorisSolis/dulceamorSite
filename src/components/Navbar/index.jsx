import logo from "@assets/logoSinFondo.png";
import "./navbar.css";

export function Navbar() {
  let pathname = location.pathname;

  return (
    <nav className="navbar">
      <figure className="logo">
        <img src={logo} alt="logo de dulce amor" />
      </figure>
        <p>Dulce Amor</p>
      {pathname != "/" ? (
        <a href="/" className="btnBack">
          Home
        </a>
      ) : null}
    </nav>
  );
}
