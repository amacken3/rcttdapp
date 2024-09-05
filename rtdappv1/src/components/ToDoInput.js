import React, { useState } from 'react';

function ToDoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new to-do"
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
}

export default ToDoInput;
