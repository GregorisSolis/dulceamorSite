import { ItemProduct } from '@components/ItemProduct';
import { pasapalos } from '../../ArrayImages/ImagesPasapalos'

export const Pasapalos = () => {
  return (
    <div className="content-product">
      <div className="title_product">
        <h1>Pasapalos</h1>
      </div>

      <div className="list-product">
        {pasapalos.map((item) => (
          <ItemProduct
            key={item.ID}
            urlImg={item.URLImage}
            name={item.name}
            price={item.value}
          />
        ))}
      </div>
    </div>
  );
};
