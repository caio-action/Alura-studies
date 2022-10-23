import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { ITask } from '../types/Task';
import style from './App.module.scss';

function App() {
  const [Tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
    <Form setTasks={setTasks}/>
    <List Tasks={Tasks}/>
    <Cronometro />
    </div>
  );
}

export default App;
