import React from "react";

import "./App.css";

import Counter from "./modules/counter/component";
import Todos from "./modules/todos/component";

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
      <br />
      <Todos />
    </div>
  );
};

export default App;
