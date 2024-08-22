import React, { useState } from "react";

let globalID = 0;

function ToDoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault();

    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalID++ }];
    });
  }

  function deleteItem(itemID) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }

  return (
    <div className="todoapp">
      <h1>Best To Do App Ever</h1>

      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button type="submit">Create Todo</button>
      </form>

      <ul>
        {todos.map((item, index) => {
          return (
            <div>
              <div key={item.id}>
                <li>
                  {item.todo} ({item.id})
                </li>
                <button onClick={() => deleteItem(item.id)}>delete</button>
              </div>
              <div>{task}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoApp;
