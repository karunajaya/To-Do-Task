import React, { useState } from "react";
import "./TodoCard.css"; // Add this file for styling

const TodoCard = ({ todo, onEdit, onDelete, onStatusChange }) => {
  const [status, setStatus] = useState(todo.status);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onStatusChange(todo.id, newStatus);
  };

  return (
    <div className="todo-card">
      <p><strong>Name :</strong> {todo.name}</p>
      <p><strong>Description :</strong> {todo.description}</p>
      <p>
        <strong>Status :</strong>
        <select value={status} onChange={handleStatusChange} className={`status-select ${status}`}>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
      <div className="todo-actions">
        <button onClick={() => onEdit(todo.id)} className="edit-btn">Edit</button>
        <button onClick={() => onDelete(todo.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
