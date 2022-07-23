import { ItemProduct } from "../../components/ItemProduct";
import pye_manzana from '../../assets/pye_manzana.jpeg'

import "./pya.css";

export function Pya() {
  return (
    <div className="content-pya">
      <div className="title_product">
        <h1>postres</h1>
      </div>

      <div className="list-product">
        <ItemProduct urlImg={pye_manzana} name="Pya de manzana" price="15.00" />
        <ItemProduct urlImg={pye_manzana} name="Pya de manzana" price="15.00" />
        <ItemProduct urlImg={pye_manzana} name="Pya de manzana" price="15.00" />
        <ItemProduct urlImg={pye_manzana} name="Pya de manzana" price="15.00" />
      </div>
    </div>
  );
}
