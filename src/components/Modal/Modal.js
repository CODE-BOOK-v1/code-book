import React, { Fragment } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles'
import './Modal.css'

const StyledCloseIcon = withStyles({
    root: {
        color: 'white',
        fontSize: 40,
        marginTop: 30,
        marginLeft: '83%'
    }
})(CloseIcon);

export const Modal = ({ Component, display, height, width, closeHandler }) => {
    if(display) {
        return (
            <div className="modal-overlay">
                <StyledCloseIcon onClick={()=> closeHandler(false)}/>
                <div className="modal-container" style={{height, width}}>
                    <Component />
                </div>
            </div>
        )
    }
    return <Fragment />;
}
