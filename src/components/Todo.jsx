const Todo = ({task, status, handleCheckmark, id}) => {
    return (
        <li className={"todo"} id={id}>
            <label className={"checkboxContainer"}> {task}
                <input type="checkbox" name="todoCheck" className={"todoCheck"} checked={status} onChange={handleCheckmark} />
                <span className={"checkmark"}></span>
            </label>
        </li>
    );
}

export default Todo;