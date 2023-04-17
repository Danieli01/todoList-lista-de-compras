import { useState } from "react";
import Task from "../Task";
import './style.css';

function TodoList () {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
 
  
  const emptyTask = <span className="EmptyTasks">Nenhum item adocionado, adicione um item para iniciar sua lista de compras!</span>
  
  const addTodo = (text) => {
    
    setTasks([...tasks, text]);
    setText('')
  }

  const removeTodo = (ref) => {
    setTasks(tasks.filter((task, index) => index !== ref));
  }

  const editTodo = (ref) => {
    setText(tasks[ref]);
    setTasks(tasks.filter((task, description) => description !== ref));
  };

  return (
    <section className="TodoList">
      <span class="material-symbols-outlined bag">
        local_mall
      </span>
      <h4>Lista de compras</h4>
      <header>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
        placeholder="adicione um item" className="input" ></input>
        <button className="success" onClick={() => addTodo(text)}>
          <span class="material-symbols-outlined">
            forms_add_on
          </span>
        </button>
      </header>

      { tasks.map((text, index) => (
        <Task
          key={index}
          taskId={index}
          description={text}
          removeCallback={removeTodo}
          editCallback={editTodo}
        />
      )) }

      {!tasks.length && emptyTask}
    </section>
  )
}

export default TodoList;