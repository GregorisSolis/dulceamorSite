import { ItemProduct } from "../../components/ItemProduct";
import {especialidadesList} from '../../ArrayImages/IamgesEspecialidades.js'


export function Especialidades() {
  return (
    <div className=".content-product">
      <div className="title_product">
        <h1>Especialidades</h1>
      </div>

      <div className="list-product">
      {especialidadesList.map(item => (
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
