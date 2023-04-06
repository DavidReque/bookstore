import { Link } from "react-router-dom";
import { bookContainerStyle, bookInfoStyle } from "../Styles/styles";

function Book({ item }) {
  return (
    <div style={bookContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} alt={item.title} width="200" />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}

export default Book;
