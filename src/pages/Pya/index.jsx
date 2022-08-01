import { ItemProduct } from "../../components/ItemProduct";
import { postresList } from "../../ArrayImages/ImagesPostres.js";

export function Pya() {

  return (
    <div className=".content-product">
      <div className="title_product">
        <h1>postres</h1>
      </div>

      <div className="list-product">
        {postresList.map(item => (
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
