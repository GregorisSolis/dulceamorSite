import { Carousel } from "@trendyol-js/react-carousel";
import foto1 from "../../assets/torta-01.jpeg";
import foto2 from "../../assets/torta-02.jpeg";
import foto3 from "../../assets/torta-03.jpeg";
import foto4 from "../../assets/torta-04.jpeg";
import foto5 from "../../assets/torta-05.jpeg";
import foto6 from "../../assets/torta-10.jpeg";
import "./corousel.css";

export function CarouselDya() {
  return (
    <div className="carousel-content">
      <div className="desktop-carousel">
        <Carousel show={3} slide={6} transition={0.5} swiping={true}>
          <img src={foto1} alt="torta" />
          <img src={foto2} alt="torta" />
          <img src={foto3} alt="torta" />
          <img src={foto4} alt="torta" />
          <img src={foto5} alt="torta" />
          <img src={foto6} alt="torta" />
        </Carousel>
      </div>
      <div className="mobil-carousel">
        <Carousel show={1} slide={6} transition={0.5} swiping={true}>
          <img src={foto1} alt="torta" />
          <img src={foto2} alt="torta" />
          <img src={foto3} alt="torta" />
          <img src={foto4} alt="torta" />
          <img src={foto5} alt="torta" />
          <img src={foto6} alt="torta" />
        </Carousel>
      </div>
    </div>
  );
}
