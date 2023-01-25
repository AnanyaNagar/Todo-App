import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import { Todo } from './TodoModel';
import TodoList from './components/TodoList';

function App () {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), text: newTodo, isDone: false}])
    setNewTodo("");
  } 

  return (
    <div className="App">
      <h1 style={{display: 'flex', justifyContent: 'center', margin: '50px 0 50px 0', fontSize: '3em'}}>
        The Only Todo
      </h1>
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
