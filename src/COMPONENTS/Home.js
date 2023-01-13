import React, { useState } from "react";

import Todos from "./Todos";
import NewTodo from "./newTodos";

const dummyTodos = ["I'm todo1", "I'm todo2"];
const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (NewTodo) => {
    setTodos([...todos, NewTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
