import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editTodo) {
      const updatedTodos = todos.map(todo =>
        todo.id === editTodo.id ? { ...todo, title: input } : todo
      );
      setTodos(updatedTodos);
      setEditTodo(null);
    } else {
      setTodos([...todos, { id: Date.now(), title: input, completed: false }]);
    }
    setInput("");
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setInput(todo.title);
  };

  const handleCompleteTodo = (todoId) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="App flex font-serif justify-center pt-6 pb-6 w-full min-h-screen mx-auto bg-gradient-to-r from-orange-300 to-pink-300 ">
      <div className='bg-tangaroa w-[550px] h-auto rounded-lg py-14'>
        <Header />
        <Form
          input={input}
          setInput={setInput}
          handleFormSubmit={handleFormSubmit}
        />
        <TodoList
          todos={todos}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
