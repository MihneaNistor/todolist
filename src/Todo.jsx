import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import './App.css';


function Todo({toDo, completeTask, deleteTask, setUpdateData, task}) {
  return (
    <>
    {toDo.map((task) => {
        return (
          <div className='task' style={{backgroundColor: task.completed ? '#9FC088' : '#E4CDA7'}}>
            <div className='taskName'>
              <h1>{task.taskName}</h1>
            </div>
            <div className='buttons'>
                <DoneIcon fontSize='large' onClick={() => completeTask(task.id)}/>
                <CloseIcon fontSize='large' onClick={() => deleteTask(task.id)}/>
                <EditIcon className = 'buttons' fontSize='large' onClick={() => setUpdateData(task)}/>

            </div>
        </div>
        );
    })}
    </>
  )
}

export default Todo