import "./itemMenu.css";

export function ItemMenu(props) {
  return (
    <div className="item-menu_content">
      <a href={props.toLink}>
            <img src={props.image_url} alt={props.text_alt} />
            <div className="sahdowUP">{props.name}</div>
      </a>
    </div>
  );
}
