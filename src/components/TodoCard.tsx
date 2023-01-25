import React, {useState} from 'react'
import { Todo } from '../TodoModel';
import './TodoCard.css'

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todo: Todo;
}


const TodoCard = ({ todos, setTodos, todo }: props) => {

    const [editable, setEditable] = useState<boolean>(false)
    const [editedTodo, setEditedTodo] = useState<string>(todo.text)

    const markTodoDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ));
    }

    const deleteTodo = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, text: editedTodo } : todo
            ));
        setEditable(false);
    }

    return (
        <div className='card'>
            {
                (editable)?
                <form onSubmit={(e) => handleEdit(e, todo.id)}>
                    <input  
                        id='todoEdit'
                        value={editedTodo} 
                        onChange={(e) => setEditedTodo(e.target.value)}/>
                </form>:  
                 (todo.isDone)? (<s id='todoText'>{todo.text}</s>): (<span id='todoText'>{todo.text}</span>)
            }
            
            <div className="card-buttons">
                <button onClick={() => {
                        if(!editable && !todo.isDone)
                            setEditable(!editable);
                        }}
                        >Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => markTodoDone(todo.id)}>Done</button>
            </div>
            
        </div>
    )
}

export default TodoCard