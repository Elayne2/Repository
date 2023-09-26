import React from "react";
import './TodoList.css';
const TodoItem =({task,tododelete}) =>{
    const HandleDelete =() =>{
        tododelete(task.id)
    };
    return <li onClick={HandleDelete}>{task.task}</li>
}
export default TodoItem;