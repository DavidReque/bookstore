import Book from "../components/Book";
import Layaout from "../components/Layaout";
import { useAppContext } from "../store/store";

const Index = () => {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <Layaout>
      <div style={booksContainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layaout>
  );
};

export default Index;
