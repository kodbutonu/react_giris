import "./App.css";
import { useState } from "react";
import { Task } from "./tasks";
function App() {
  const [newTask, setNewTask] = useState("");
  const [todolist, setToDoList] = useState([]);

  const TextList = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id - 1,
      taskName: newTask,
      background: false,
    };
    setToDoList([...todolist, task]);
  };

  const listValue = (event) => {
    setNewTask(event.target.value);
  };
  const removeList = (id) => {
    setToDoList(todolist.filter((task) => task.id !== id));
  };
  const backgroundChange = (id) => {
    setToDoList(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, background: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="List">
        <h1 style={{backgroundColor:"blue"}}>Eklemek İstediğiniz Görevleri Giriniz.</h1>
        <div className="Input">
          <input type="text" name="input" onChange={listValue} />
          <button type="" onClick={TextList}>
            Ekle
          </button>
        </div>
        <div>
          <div>
            {todolist.map((task) => {
              return (
                <Task
                  taskName={task.taskName}
                  id={task.id}
                  removeList={removeList}
                  background={task.background}
                  backgroundChange={backgroundChange}
                />
              );
            })}
          </div>
        </div>
        <li></li>
      </div>
    </div>
  );
}
export default App;
