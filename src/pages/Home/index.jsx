import { ItemCategory } from "@components/ItemCategory";
import principal from "@assets/test.png";
import antojitos from "@assets/antojitos.png";
import breakfast from "@assets/breakfast.png";
import pedido_personalizado from "@assets/pedidos.png";

import "./home.css";

export function Home() {
  return (
    <div className="home">
      <div className="content_picture">
        <figure>
          <img src={principal} alt="banner dulce amor" />
        </figure>
      </div>
      <div className="content_home">
        <div className="title_principal">
          <div className="content_title">
            <h1>bienvenidos a dulce amor</h1>
            <p>si la vida no es dulce, endulzala con nosotros</p>
          </div>
        </div>
        <div className="categoria">
          <ItemCategory imgURL={pedido_personalizado} name="Pedidos" link='/pedidos-personalizados' />
          <ItemCategory imgURL={breakfast} name="Pasapalos" link='/pasapalos' />
          <ItemCategory imgURL={antojitos} name="Antojitos" link='/antojitos' />
        </div>
      </div>
    </div>
  );
}
