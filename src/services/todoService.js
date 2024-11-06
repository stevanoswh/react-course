const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch todos');
  const data = await response.json();
  return data.slice(0, 10); // Limit to first 10 todos
};

export const addTodo = async (title) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      title,
      completed: false,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) throw new Error('Failed to add todo');
  const data = await response.json();
  return data;
};

export const toggleTodo = async (id, completed) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) throw new Error('Failed to update todo');
  const updatedTodo = await response.json();
  return updatedTodo;
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete todo');
};
