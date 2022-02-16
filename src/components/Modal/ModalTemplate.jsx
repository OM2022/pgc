import { makeStyles, Modal, Slide } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
import React from "react";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    }
}))

/**
 * A template for displaying a modal.
 * 
 * Expects the following props:
 * 
 * @requires boolean open - Indicates if the modal is open
 * @requires Function toggle - A function which toggles the open (see above) flag
 */
const ModalTemplate = props => {
    const classes = useStyles()
    return (
        <Modal
            open={props.open}
            onClose={props.toggle}
            closeAfterTransition
            className={classes.container}
        >
            <Slide direction="down" in={props.open} mountOnEnter unmountOnExit>
                {props.children}
            </Slide>
        </Modal>
    )
}

export default ModalTemplate