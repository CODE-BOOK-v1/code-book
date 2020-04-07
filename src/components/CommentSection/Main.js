import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Component } from './Component';

export const CreatePost = () => {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <Modal 
                display={display} 
                Component={Component} 
                height={700} 
                width={1000}
                closeHandler={value => setDisplay(value)}
            />
        </div>
    )
}

