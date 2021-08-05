import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>Sergey</div>
                <div className={classes.dialog}>Ayaal</div>
                <div className={classes.dialog}>Yan</div>
                <div className={classes.dialog}>Alexander</div>
                <div className={classes.dialog}>Roman</div>
            </div>
            <div className={classes.messages}>
                <div>
                    Hi
                </div>
                <div>
                    How are you?
                </div>
                <div>
                    Whatsapp man
                </div>
            </div>
        </div>
    )
}

export default Dialogs;