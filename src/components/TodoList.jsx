import Todo from './Todo.jsx';

const TodoList = ({data, handleCheckmark}) => {
    return (
        <div className={"main__todolist"}>
            <h3>List of todos</h3>
            <ul>
                {data.length && data.map((item, index) => {
                    return <Todo task={item.task} status={item.status} key={item.id} handleCheckmark={handleCheckmark} id={item.id} />
                })}
                {!data.length && 'No todos yet...'}
            </ul>
        </div>
    );
}

export default TodoList;