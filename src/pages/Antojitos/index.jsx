import { ItemProduct } from "@components/ItemProduct";
import {antojitosList} from '../../ArrayImages/ImagesAntojistos'

export function Antojitos() {
  return (
    <div className="content-product">
      <div className="title_product">
        <h1>Antojitos</h1>
      </div>

      <div className="list-product">
      {antojitosList.map(item => (
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
