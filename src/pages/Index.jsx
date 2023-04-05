import { useAppContext } from "../store/store";
import { Link } from "react-router-dom";

const Index = () => {
  const store = useAppContext();

  return (
    <div>
    <Link to='/create'>Create</Link>
      {store.items.map((item) => (
        <div key={item.id}>
            <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Index;
