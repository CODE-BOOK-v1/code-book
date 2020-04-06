import React, { Fragment } from 'react'
import './Modal.css'

export const Modal = ({ component, display }) => {
    if(display) {
        return (
            <div className="modal-overlay">
                <div className="modal-container">
                    {component}
                </div>
            </div>
        )
    }
    return <Fragment />;
}
