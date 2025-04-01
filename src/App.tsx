import {useState } from 'react'
import './App.css'
import Task from "./Task";

interface Task{
  text: string;
  isCompleted: boolean;
}

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([])

const handleAddTask = () => {
  setTasks([...tasks,{text:taskText,isCompleted: false}]);
  setTaskText("");
};

const handleInput = (event: any) => {
  setTaskText(event.target.value)
};

const handleToggleComplete = (index: number) => {
  const updatedTasks = tasks.map((task, i) =>
    i === index ? { ...task, isCompleted: !task.isCompleted } : task
  );
  setTasks(updatedTasks);
};

const handleElimination = (index: number) => {
  setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
}; 
/*
Esta función elimina una tarea específica de la lista cuando el usuario hace clic en el botón "Eliminar".

Recibe un índice (index: number) que indica la posición de la tarea en el array tasks.

Usa setTasks para actualizar el estado, eliminando la tarea con ese índice.

Filtra las tareas, manteniendo solo las que no coincidan con el índice que queremos eliminar. 

filter((_, i) => i !== index) → Mantiene solo las tareas cuyo índice no coincida con el eliminado.

_ (primer parámetro) → Representa el elemento de la tarea, pero no lo usamos, por eso se pone _ (es una convención para variables no utilizadas).

*/
  return (
    <>
      <h1>TODO LIST</h1>
      <div class="input-btn">
      <input type="text" class="input" onInput ={(handleInput)} value={(taskText)}/>
      <button onClick={handleAddTask}>Añadir tarea</button>
      </div>
      <div className="container">
        {tasks.map((task,index) => {
          return (
            <div>
              <Task
                key={index}
                task={task}
                index={index}
                handleToggleComplete={handleToggleComplete}
                handleElimination={handleElimination}
              />
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
