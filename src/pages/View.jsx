import { useParams } from "react-router-dom";
import Layaout from "../components/Layaout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

const View = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <Layaout>Item not found</Layaout>;
  }

  return (
    <Layaout>
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item?.cover} width="400" /> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "Leido" : "Por terminar"}</div>
      <div>{item?.review}</div>
    </Layaout>
  );
};

export default View;
