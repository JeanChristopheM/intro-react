import Input from './components/Input.jsx';
import TodoList from './components/TodoList.jsx';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todoList')));
  
  const saveData = (data) => {
    setData(data);
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  //Initialization of the localStorage
  if (!data) {
    saveData([]);
  }

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
    saveData(newData);
  }
  // Handling the checking of a task
  const handleCheckmark = (id) => {
    let newData = [...data];
    let itemToUpdate = newData.find(element => element.id === id);
    itemToUpdate.status = !itemToUpdate.status;
    saveData(newData);
  }
  // Handling deletion of a task
  const handleDelete = (id) => {
    let newData = [...data];
    let index = newData.findIndex(todo => todo.id === id);
    newData.splice(index, 1);
    saveData(newData);
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
    </div>
  );
}

export default App;
