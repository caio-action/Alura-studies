import style from "./relogio.module.scss"

interface Props {
  time: number | undefined
}
export default function Relogio({ time }: Props) {
    return(
      <>  
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        </>
    )
}