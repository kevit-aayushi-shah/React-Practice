import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState([]);

  const passData = (data) => {
    // console.log(data);
    setItems((prevItems) => {
      return [...prevItems, { name: data.name, age: data.age, id: data.id }];
    });
  };
  // console.log(items);
  return (
    <div>
      <Form onSubmit={passData} />
      {items.map((item) => {
        return (
          <Display id={item.id} name={item.name} age={item.age} key={item.id} />
        );
      })}
    </div>
  );
};

export default App;
