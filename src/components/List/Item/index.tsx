import { ITask } from "../../../types/Task";
import style from "./Item.module.scss";

interface Props extends ITask {
    
    taskSelection: (taskSelected: ITask) => void 
}

export default function Item (
    {
        task, 
        time, 
        selected, 
        completed, 
        id , 
        taskSelection}: Props ) {
    return(
        <li 
        className={`${style.item} ${selected ? style.itemSelected : ''}`}
        onClick={() => taskSelection({
            task,
            time,
            selected,
            completed,
            id
        })}
        >
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
    )
}