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
  //Template for new todos
  class newTodo {
    constructor (task, status) {
      this.task = task;
      this.status = status;
      this.id = new Date().getTime();
    }
  }
  
  // HANDLERS
  // Handling the adding of a new task
  const handleAdd = (inputValue) => {
    let todo = new newTodo(inputValue, false);
    let newData = [...data];
    newData.push(todo);
    saveData(newData);
  }
  // Handling the checking of a task
  const handleCheckmark = (e) => {
    let newData = [...data];
    for (let item of newData) {
      if (item.id === parseInt(e.target.parentNode.parentNode.id)) {
        item.status = !item.status;
      }
    }
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
