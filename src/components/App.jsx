import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [listItems, setListItems] = useState([input]);
  function handleOnChange(event) {
    const { value, name } = event.target;
    console.log(value);
    console.log(name);

    name === "title"
      ? setInput({ ...input, title: value })
      : setInput({ ...input, content: value });
  }

  function handleOnAdd() {
    setListItems([...listItems, input]);
    console.log(listItems);
  }
  function handleDelete(id) {
    setListItems((prevList) => {
      return listItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="app-container">
      <Header />
      <CreateArea onChange={handleOnChange} onClick={handleOnAdd} />
      <div className="note-list">
        {listItems.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
