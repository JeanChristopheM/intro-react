const Input = ({handleAdd, onInputChange}) => {
    return (
        <div className={"main__input"}>
            <input type="text" name="todoInput" id="todoInput" placeholder="Enter task here" onChange={onInputChange} />
            <button className={"addBtn"} onClick={handleAdd}>Add todo</button>
        </div>
    );
}

export default Input;