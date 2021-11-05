import React, { useRef} from 'react';

const Input = ({handleAdd}) => {
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputElement = inputRef.current;
        inputElement.value.length > 0 ? handleAdd(inputElement.value) : alert('Please enter a task');
        inputElement.value = '';
    }
    return (
        <form className={"main__input"} onSubmit={handleSubmit}>
            <input type="text" name="todoInput" id="todoInput" placeholder="Enter task here" ref={inputRef} />
            <button className={"addBtn"} type="submit">Submit</button>
        </form>
    );
}

export default Input;