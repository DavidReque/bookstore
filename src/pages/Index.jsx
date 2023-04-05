import Layaout from "../components/Layaout";
import { useAppContext } from "../store/store";

const Index = () => {
  const store = useAppContext();

  return (
    <Layaout>
      {store.items.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </Layaout>
  );
};

export default Index;
