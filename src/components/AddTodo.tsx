import './AddTodo.css'

type props = {
    newTodo: string;
    setNewTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e: React.FormEvent) => void;
}

function AddTodo({newTodo, setNewTodo, addTodo}:props) {
    return (
        <form className='container'>
            <div className='row'>
                <input placeholder='Type here' 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)}/>
                <button id='todo-button' onClick={(e) => addTodo(e)}>Add</button>
            </div>
        </form>
    )
}

export default AddTodo