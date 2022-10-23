import { ITask } from "../../types/Task";
import Item from "./Item";
import style from './List.module.scss';


function List({ Tasks}: {Tasks: ITask[]}) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
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