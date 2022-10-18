import React from "react";
import Item from "./Item";
import style from './List.module.scss';

function List() {
    const Tasks = [{
        task: 'React',
        time: '2:00:00'
    }, {
        task: 'Javascript',
        time: '01:00:00'
    }, {
        task: 'Typescript',
        time: '03:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {Tasks.map((item, index) => (
                   <Item
                   key={index}
                   {...item}
                   />
                ))}
            </ul>


        </aside>
    )
}

export default List;