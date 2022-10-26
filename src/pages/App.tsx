import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/Task';
import style from './App.module.scss';

function App() {
  const [Tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function taskSelection(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
    <Form setTasks={setTasks}/>
    <List 
    Tasks={Tasks}
    taskSelection={taskSelection} />
    <Cronometro selected={selected}/>
    </div>
  );
}

export default App;
