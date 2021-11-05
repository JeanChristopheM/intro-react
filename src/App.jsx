import Input from './components/Input.jsx';
import TodoList from './components/TodoList.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todoList')));
  const [areThereDone, setAreThereDone] = useState(false);

  //Initialization of the localStorage
  if (!data) {
    setData([]);
  }
  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(data));
    let newData = data.filter(x => x.status === true);
    newData.length > 0 ? setAreThereDone(true) : setAreThereDone(false);
  }, [data]);

  // HANDLERS
  // Handling the adding of a new task
  const handleAdd = (inputValue) => {
    let todo = {
      task: inputValue,
      status: false,
      id: new Date().getTime()
    }
    let newData = [...data];
    newData.push(todo);
    setData(newData);
  }
  // Handling the checking of a task
  const handleCheckmark = (id) => {
    let newData = [...data];
    let itemToUpdate = newData.find(element => element.id === id);
    itemToUpdate.status = !itemToUpdate.status;
    setData(newData);
  }
  // Handling deletion of a task
  const handleDelete = (id) => {
    let newData = [...data];
    let index = newData.findIndex(todo => todo.id === id);
    newData.splice(index, 1);
    setData(newData);
  }

  const handleDeleteDone = () => {
    let newData = data.filter(x => x.status === false);
    setData(newData);
  }
  return (
    <div className={"App"}>
      <header className={"header"}>
        <h1>TODOS</h1>
      </header>
      <main className={"main"}>
        <Input handleAdd={handleAdd} />
        <TodoList data={data} handleCheckmark={handleCheckmark} handleDelete={handleDelete} />
      </main>
      <footer className="footer">
        {areThereDone && <button type="button" className={"deleteDone"} onClick={handleDeleteDone}>Delete done todos</button>}
      </footer>
    </div>
  );
}

export default App;
