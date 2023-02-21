import React, { useState } from 'react'
import AddTaskForm from './AddTaskForm.jsx';
import './App.css';
import Todo from './Todo.jsx';
import UpdateForm from './UpdateForm.jsx';


function App() {

    const [toDo, setToDo] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

  function addToDo(id) {
      let task = {
        id: Math.floor(Math.random() * 10000),
        taskName: newTask,
        completed: false
      };
      
      setToDo([...toDo, task]);
      setNewTask('');
    }


  const changeHolder = (e) => {
    setUpdateData({...updateData, taskName: e.target.value});
  }

  const updateTask = () => {
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id);
    setToDo([
      ...removeOldRecord, 
      updateData
    ]);
    
    setUpdateData('');
  }
 
  function deleteTask(id) {
    setToDo(toDo.filter(task => task.id !== id));
  }

  function completeTask(id) {
    setToDo(toDo.map((task) => {
      if(task.id === id) {
        return {...task, completed: true};
      } else {
        return task;
      }
    }));
  }


  return (
    <>
    <div className='todolist'>
    <h1 className='title'>To Do List</h1>
    {toDo.length > 1 ? <p>You got {toDo.length} tasks left</p> :
    toDo.length === 1 && <p>You got {toDo.length} task left</p>
    }

    <div className='header'>
      
      {updateData && updateData ? (
            <UpdateForm
            updateData={updateData}
            changeHolder={changeHolder}
            updateTask={updateTask}
           />
          ) : (<AddTaskForm 
            newTask={newTask}
            setNewTask={setNewTask}
            addToDo={addToDo}

            />
          )}
    </div>    

    {toDo.length === 0 ?
     <p>No tasks...</p> : 
        <Todo
        toDo={toDo}
        completeTask={completeTask}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
        />
    }

          
           
    </div>
    </>
  )
}

export default App;
