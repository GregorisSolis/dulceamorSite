import {listCarousel} from '../../ArrayImages/carouselImages'
import "./corousel.css";

export function CarouselDya() {
  return (
    <div className="carousel-content">
      <div className="pic-ctn">
        {listCarousel.map(item => (
          <img src={item.URLImage} key={item.ID} className="pic" />
        ))}
      </div>
    </div>
  );
}
