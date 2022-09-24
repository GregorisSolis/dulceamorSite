import "./itemCategory.css";

export const ItemCategory = (props) => {
  return (
    <a href={props.link} className="itemCategory_container">
      <figure>
        <img src={props.imgURL} alt={props.name} />
      </figure>
      <div className="black_back">
        <p>{props.name}</p>
      </div>
    </a>
  );
};
