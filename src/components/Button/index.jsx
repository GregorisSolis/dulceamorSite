import Image from "@assets/ws.png";
import "./buttonStyle.css";

export function Button(props) {
  return (
    <a className="buttonAction" href="https://wa.me/5804249114582?text=Hola dulce amor!!">
      <img src={Image} alt="image of button" />
    </a>
  );
}
