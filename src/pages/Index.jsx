import { Link } from "react-router-dom";
import Book from "../components/Book";
import Layaout from "../components/Layaout";
import { useAppContext } from "../store/store";
import { booksContainer, buttonStyle,  } from "../../Styles/styles";

const Index = () => {
  const store = useAppContext();

  return (
    <Layaout>
      <div style={booksContainer}>
        {store.items.length > 0 ? (
          store.items.map((item) => (
            <div key={item.id}>
              <Book key={item.id} item={item} />
            </div>
          ))
        ) : (
          <Link style={buttonStyle} to="/create">Add book</Link>
        )}
      </div>
    </Layaout>
  );
};

export default Index;
