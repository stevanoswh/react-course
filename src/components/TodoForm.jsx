import React, { useState } from 'react';
import '../App.css'

const TodoForm = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
                className="input"
            />
            <button type="submit" className="button">Add Todo</button>
        </form>
    );
};

export default TodoForm;
