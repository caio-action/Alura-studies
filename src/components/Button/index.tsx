import React from "react";
import style from './Button.module.scss';

class Button extends React.Component<{ texto:string }> {
    render(): React.ReactNode {
        return(
            <button className={style.button}>
               {this.props.texto}
            </button>
        )
    }
}

export default Button;