import { type } from "os";
import React from "react";
import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.button}>
            {children}
        </button>
    )
}

// class Button1 extends React.Component<{ children?:string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
//     render(): React.ReactNode {
//         const{ type = "button", onClick} = this.props
//         return(
//             <button  onClick={onClick} type={type} className={style.button}>
//                {this.props.children}
//             </button>
//         )
//     }
// } CLASS COMPONENT

export default Button;