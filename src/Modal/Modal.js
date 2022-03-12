import react from "react";
import './Modal.css'
const Modal=(props)=>{
    return(
        <div className="modal">
            <div className="modal-content" onClick={props.onclick}>{props.children}</div>
        </div>
    );
}
export default Modal;