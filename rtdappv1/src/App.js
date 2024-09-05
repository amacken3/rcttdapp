import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: todos.length + 1, title: todo, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <Router>
      <Navbar />  {/* Navbar fixed at the top */}
      <div className="content-container"> {/* Flexbox container to center the to-do list */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <Home
              todos={todos}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;