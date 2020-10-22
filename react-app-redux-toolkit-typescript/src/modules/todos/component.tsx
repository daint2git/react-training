import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { todosSelector, addTodo } from "./redux";

const Todos: React.FC = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div>
        <input
          type="text"
          ref={inputRef}
          defaultValue=""
          onKeyDown={(e) => {
            if (e.keyCode === 13 && inputRef.current?.value) {
              dispatch(addTodo(inputRef.current.value));
              inputRef.current.value = "";
            }
          }}
        />
      </div>
      <br />
      <ul>
        {todos.data.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
