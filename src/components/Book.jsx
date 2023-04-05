import { Link } from "react-router-dom";

function Book({item}) {
  return (
    <div>
      <Link to={`/view/${item.id}`}>
        <img src={item.cover} alt={item.title} width="200" />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}

export default Book;
