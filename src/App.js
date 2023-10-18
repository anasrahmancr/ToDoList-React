import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  const deleteTask = (taskId) => {
    setTodos(toDos.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    if (toDo.trim() !== "") {
      setTodos([
        ...toDos,
        { id: Date.now(), text: toDo, status: false }
      ]);

      setTodo(""); // Empty the input field
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>This is a good Day.. 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={handleAddTask}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.map((task) => {
                        if (task.id === obj.id) {
                          task.status = e.target.checked;
                        }
                        return task;
                      })
                    );
                  }}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p style={{ textDecoration: obj.status ? "line-through" : "none" }}>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => deleteTask(obj.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
