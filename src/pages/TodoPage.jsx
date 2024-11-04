import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import '../App.css';
import TodoList from '../components/TodoList';
// import ErrorMessage from '../components/ErrorMessage';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const handleAddTodo = (title) => {
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="header">Todo App</h1>
      {/* <ErrorMessage message={error} /> */}
      <TodoForm addTodo={handleAddTodo} />
      <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
    </div>
  );
}
