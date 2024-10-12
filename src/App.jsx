import React, { useState } from "react";
import TodoCard from "./TodoCard"; 
import "./App.css"; 
import "./TodoForm.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Office Task - 1", description: "This is the description for my first task", status: "Not Completed" },
    { id: 2, name: "Office Task - 2", description: "This is the description for my second task", status: "Completed" },
    { id: 3, name: "Office Task - 3", description: "This is the description for my third task", status: "Not Completed" }
  ]);
  
  const [filter, setFilter] = useState("All");

  const [newTodo, setNewTodo] = useState({ name: "", description: "" });

  const handleAddTodo = () => {
    if (newTodo.name && newTodo.description) {
      const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      setTodos([...todos, { id: newId, ...newTodo, status: "Not Completed" }]);
      setNewTodo({ name: "", description: "" });
    } else {
      alert("Please fill in both fields");
    }
  };

  const handleEdit = (id) => {
    console.log(`Edit todo with id: ${id}`);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status } : todo)));
  };

  const filteredTodos = todos.filter(todo => filter === "All" || todo.status === filter);

  return (
    <div className="app">
      <h1>My Todos</h1>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Todo Name"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div className="filter">
        <label>Status Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className={`filter-select ${filter}`}>
          <option value="All">All</option>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

