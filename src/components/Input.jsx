import React, { useRef} from 'react';

const Input = ({handleAdd, onInputChange}) => {
    const inputRef = useRef();
    const clickHandler = (e) => {
        e.preventDefault();
        const inputElement = inputRef.current;
        handleAdd(inputElement.value);
        inputElement.value = '';
    }
    return (
        <form className={"main__input"} onSubmit={clickHandler}>
            <input type="text" name="todoInput" id="todoInput" placeholder="Enter task here" ref={inputRef} onChange={onInputChange} />
            <button className={"addBtn"} type="submit">Add todo</button>
        </form>
    );
}

export default Input;