const Todo = ({task, status, handleCheckmark, handleDelete, id}) => {
    return (
        <li className={"todo"} id={id}>
            <label className={"checkboxContainer"}> {task}
                <input type="checkbox" name="todoCheck" className={"todoCheck"} checked={status} onChange={() => handleCheckmark(id)} />
                <span className={"checkmark"}></span>
            </label>
            <button className="deleteBtn" onClick={() => handleDelete(id)}></button>
        </li>
    );
}

export default Todo;