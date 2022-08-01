import "./home.css";
import { ItemMenu } from "../../components/ItemMenu";
import { CarouselDya } from "../../components/CarouselDya";

//imagenes del menu
import pya_limon_img from "../../assets/pya_limon.jpeg";
import sandwich_img from "../../assets/sandwich_boton.jpeg";
import lasagnas_img from "../../assets/lasagnas_boton.jpeg";
import fitnes_img from "../../assets/fitnes_boton.jpeg";

export function Home() {
  return (
    <div className="home">
      <div className="text_welcome">
        <h1>Bienvenidos a Dulce amor</h1>
        <div className="line-bottom"></div>
        <p>Escoge una de nuestras opciones</p>
      </div>

      <div className="section_itemMenu">
        <ItemMenu
          image_url={pya_limon_img}
          name="Pya"
          text_alt="pya de limon dulce amor"
          toLink="/pya"
        />
        <ItemMenu
          image_url={sandwich_img}
          name="Antojitos"
          text_alt="sandwich dulce amor"
          toLink="/antojitos"
        />
        <ItemMenu
          image_url={lasagnas_img}
          name="Especialidades"
          text_alt="lasagna - especialidades dulceamor"
          toLink="/especialidades"
        />
        <ItemMenu
          image_url={fitnes_img}
          name="Fitnes"
          text_alt="comida fitnes - dulce amor"
          toLink="/fitnes"
        />
      </div>

      <div className="text_pedidos">
        <p>PEDIDOS PERSONALIZADOS</p>
        <div className="line-bottom"></div>
      </div>

      <CarouselDya />
    </div>
  );
}
