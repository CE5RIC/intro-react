import {useState} from "react";

const Todos = () => {
    const initialTodos = [
        {
            name: "First thing to do",
        },
        {
            name: "Second thing to do",
        },
        {
            name: "Third thing to do",
        }
    ];

    const [todos, setTodos] = useState(initialTodos);
    const [checkedState, setCheckedState] = useState(new Array(initialTodos.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item)

        setCheckedState(updatedCheckedState);

    };


    return (
        <ul>
            {todos.map(({name}, index) => (
                <li key={index}>
                    <input type="checkbox" name={name} value={name} checked={checkedState[index]} onChange={() => handleOnChange(index)} />
                    <label>{name}</label>
                </li>
            ))}
        </ul>
    );
}

export default Todos;;