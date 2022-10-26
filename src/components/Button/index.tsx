import { type } from "os";
import React from "react";
import style from './Button.module.scss';

class Button extends React.Component<{ children?:string, type?: "button" | "submit" | "reset"  }> {
    render(): React.ReactNode {
        const{ type = "button"} = this.props
        return(
            <button type={type} className={style.button}>
               {this.props.children}
            </button>
        )
    }
}

export default Button;