import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([]);

  function loadFromLocalStorage() {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      const parsedBooks = JSON.parse(storedBooks);
      setItems(parsedBooks);
    }
  }

  function saveToLocalStorage(items) {
    localStorage.setItem("books", JSON.stringify(items));
  }
  
  useEffect(() => {
    loadFromLocalStorage();
  }, []);  

  function createItem(item) {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
    saveToLocalStorage(temp);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);

    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };

    setItems(temp);
    saveToLocalStorage(temp);
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
