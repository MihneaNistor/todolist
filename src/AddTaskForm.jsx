import React from "react";
import './App.css';

function AddTaskForm ({ newTask, setNewTask, addToDo }) {
  return(
    <>
     <div className='header'>
            <input
            type="text"
            value={newTask}
            placeholder="To Do..."
            onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addToDo}>Add To Do</button>         
      </div>
    </>
  )
}

export default AddTaskForm;