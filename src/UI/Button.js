import { Fragment } from "react/cjs/react.production.min";
import './Button.css'
const Button=(props)=>{
    return(
        <Fragment>
        <button onClick={props.onClick} type={props.type} className={props.className}>{props.children}</button>
        </Fragment>
    );
}

export default Button;