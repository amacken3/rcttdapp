import React from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

function home({ todos, addTodo, deleteTodo, toggleComplete, filter }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>To-Do List</h1>
      <ToDoInput addTodo={addTodo} />
      <ToDoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default home;