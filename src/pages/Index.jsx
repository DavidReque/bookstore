import Book from "../components/Book";
import Layaout from "../components/Layaout";
import { useAppContext } from "../store/store";

const Index = () => {
  const store = useAppContext();

  return (
    <Layaout>
      {store.items.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </Layaout>
  );
};

export default Index;
