import React from 'react';
import './App.css';


function UpdateForm({updateData, changeHolder, updateTask}) {
  return (
    <>
        <input 
        value={ updateData && updateData.taskName }
        onChange={ (e) => changeHolder(e)}
        />
        <button className = 'header' onClick={updateTask}>Update</button>

    </>
  )
}

export default UpdateForm