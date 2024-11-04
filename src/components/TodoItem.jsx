import '../App.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
    <li className="todoItem">
      <span
        className={`todoText ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="deleteButton"
      >
        Delete
      </button>
    </li>
);

export default TodoItem;
