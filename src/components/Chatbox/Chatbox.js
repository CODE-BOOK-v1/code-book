import React, {useState, useEffect} from 'react'
import './Chatbox.css'

export const ChatBox = ({ onBlurHandler, placeholder, sendMessage, style, comment }) => {
    const [text, setText] = useState('');

    useEffect(()=> {
        setText(comment)
    }, [comment]);
    const sendMessageHandler = event => {
        if(event.keyCode === 13) {
            sendMessage(text);
        }
    }
    return (
        <input 
            className="chat-box-container"
            type="text" 
            style={style}
            placeholder={placeholder} 
            value={text} 
            onChange={e => setText(e.target.value)}
            onBlur={()=> onBlurHandler(text)}
            onKeyUp={sendMessageHandler}
        />
    )
}
