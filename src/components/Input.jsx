import React, { useRef} from 'react';

const Input = ({handleAdd}) => {
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputElement = inputRef.current;
        handleAdd(inputElement.value);
        inputElement.value = '';
    }
    return (
        <form className={"main__input"} onSubmit={handleSubmit}>
            <input type="text" name="todoInput" id="todoInput" placeholder="Enter task here" ref={inputRef} />
            <button className={"addBtn"} type="submit">Add todo</button>
        </form>
    );
}

export default Input;