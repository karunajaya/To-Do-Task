import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName && todoDescription) {
      addTodo({
        name: todoName,
        description: todoDescription,
      });
      setTodoName("");
      setTodoDescription("");
    }
  };

  return (
    <div className="todo-form-container">
      <h2>My todo</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;

