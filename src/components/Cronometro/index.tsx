import Button from "../Button";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss"
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/Task";
import { useState } from "react";

interface Props {
    selected: ITask | undefined
}

export default function Cronometro({ selected }: Props) {
    const [time, setTime] = useState<number>();
    if(selected?.time) {
        setTime(timeForSeconds(selected?.time));
    }
    return( 
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
        <Relogio />
        </div>
        <Button 
        children="Começar!"/>
    </div>
    )
}