import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import '../App.css';
import TodoList from '../components/TodoList';
import ErrorMessage from '../components/ErrorMessage';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from '../services/todoService';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        setError('Failed to fetch todos. Please try again later.');
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (title) => {
    try {
      const newTodo = await addTodo(title);
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError('Failed to add todo. Please try again.');
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      const updatedTodo = await toggleTodo(id, !todoToUpdate.completed);
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    } catch (err) {
      setError('Failed to update todo. Please try again.');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1 className="header">Todo App</h1>
      <ErrorMessage message={error} />
      <TodoForm addTodo={handleAddTodo} />
      <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
    </div>
  );
}
