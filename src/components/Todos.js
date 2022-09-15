import {useState} from "react";

const Todos = () => {
    const initialTodos = ["My first todo", "My second todo", "My third todo"];
    const [todos, setTodos] = useState(initialTodos);
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo}>
                    <input type="checkbox" /> {todo}
                </li>
            ))}
        </ul>
    );
}

export default Todos;