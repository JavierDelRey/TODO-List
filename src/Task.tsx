import React from "react";

interface TaskProps {
  task: { text: string; isCompleted: boolean };
  index: number;
  handleToggleComplete: (index: number) => void;
  handleElimination: (index: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, index, handleToggleComplete, handleElimination }) => {
  return (
    <div className="task">
      <div className="bruh">
        <input 
          type="checkbox" 
          checked={task.isCompleted} 
          onChange={() => handleToggleComplete(index)} 
        />
        <p className={task.isCompleted ? "tachado" : ""}>{task.text}</p>
      </div>
      <div className="bruh2">
        <button onClick={() => handleElimination(index)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Task;