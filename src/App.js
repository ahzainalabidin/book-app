import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {

  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: Math.floor(Math.random() * 9999), title }]);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );

}

export default App;
