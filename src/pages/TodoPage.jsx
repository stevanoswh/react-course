// src/pages/TodoPage.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ErrorMessage from '../components/ErrorMessage';
import {
  fetchTodosThunk,
  addTodoThunk,
  toggleTodoThunk,
  deleteTodoThunk,
} from '../redux/slices/todoSlice';

export default function TodoPage() {
  const dispatch = useDispatch();
  const { items: todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const handleAddTodo = (title) => {
    dispatch(addTodoThunk(title));
  };

  const handleToggleTodo = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    dispatch(toggleTodoThunk({ id, completed: !todoToUpdate.completed }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoThunk(id));
  };

  return (
    <div className="container">
      <h1 className="header">Todo App</h1>
      {loading && <p>Loading...</p>}
      <ErrorMessage message={error} />
      <TodoForm addTodo={handleAddTodo} />
      <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
    </div>
  );
}
