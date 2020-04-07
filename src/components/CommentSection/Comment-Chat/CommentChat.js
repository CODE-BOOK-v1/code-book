import React from 'react'
import { Navbar } from './utils/Navbar';
import { Chatbox } from './utils/Chatbox'

export const CommentChat = () => {
    return (
        <div style={{border: '1px solid #F2F2F2', position: 'relative', width: '100%', height: '102%'}}>
            <Navbar name="Anto" img="https://c7.uihere.com/files/348/800/890/computer-icons-avatar-user-login-avatar.jpg"/>
            
            <Chatbox />
        </div>
    )
}
