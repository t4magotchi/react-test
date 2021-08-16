import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return(
        <div>{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Sergey" id="1"></DialogItem>
                <DialogItem name="Ayaal" id="2"></DialogItem>
                <DialogItem name="Yan" id="3"></DialogItem>
                <DialogItem name="Alexander" id="4"></DialogItem>
                <DialogItem name="Roman" id="5"></DialogItem>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"></Message>
                <Message message="Whatsapp"></Message>
                <Message message="byebye"></Message>
            </div>
        </div>
    )
}

export default Dialogs;