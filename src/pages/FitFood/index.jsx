import { ItemProduct } from "../../components/ItemProduct";
import { fitFoodList } from '../../ArrayImages/ImagesFitFood'

export function FitFood() {
  return (
    <div className=".content-product">
      <div className="title_product">
        <h1>Fitnes</h1>
      </div>

      <div className="list-product">
      {fitFoodList.map(item => (
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
