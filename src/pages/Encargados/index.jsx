import { ItemProduct } from "@components/ItemProduct";
import {pedidos} from '../../ArrayImages/IamgesPedidosPersonalizados.js'


export function Encargados() {
  return (
    <div className="content-product">
      <div className="title_product">
        <h1>Pedidos personalizados</h1>
      </div>

      <div className="list-product">
      {pedidos.map(item => (
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
}
