import { ITask } from "../../types/Task";
import Item from "./Item";
import style from './List.module.scss';

interface Props {
    Tasks: ITask[],
    taskSelection: (taskSelected: ITask) => void 
}

function List({ Tasks, taskSelection}: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {Tasks.map(item => (
                   <Item
                   taskSelection={taskSelection}
                   key={item.id}
                   {...item}
                   />
                ))}
            </ul>


        </aside>
    )
}

export default List;