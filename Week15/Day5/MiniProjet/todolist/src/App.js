import React, { useState } from 'react';
import TodoForm from './TodoForm';

import TodoItem from './SupItem';

const App = () => {
const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { task: task, completed: false }]);
  };



 const tododelete =(id) =>{
  setTasks((prevTask) => prevTask.filter((task) => task.id !== id))
 }

  return (
    <div className="todo-list">
      <h1 className="todo-titre">Formulaire de tâches</h1>
      <TodoForm addTask={addTask} />
      <h3>Listes des tache ajouter</h3>
      <ul>
        {tasks.map((task) =>(
          <TodoItem key={task.id} task={task} tododelete={tododelete}></TodoItem>
        ))}
      </ul>
      
    </div>
  );
};

export default App;