import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import Card from "./components/UI/Card";

const App = () => {
  const [items, setItems] = useState([]);

  const passData = (data) => {
    // console.log(data);
    setItems((prevItems) => {
      return [...prevItems, data];
    });
  };
  // console.log(items);
  return (
    <div>
      <Form onSubmit={passData} />
      {items.map((item) => {
        return (
          <Card>
            <Display id={item.id}name={item.name} age={item.age} />
          </Card>
        );
      })}
    </div>
  );
};

export default App;
