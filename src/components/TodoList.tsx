import React from 'react'
import { Todo } from '../TodoModel'
import TodoCard from './TodoCard';
import './TodoList.css'

interface props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos}: props) => {
  return (
    <div className='list-container'>
        {todos.map((todo) => (<TodoCard key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />))}
    </div>
  )
}

export default TodoList