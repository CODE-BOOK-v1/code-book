import React, { useState } from 'react';
import { ChatBox } from '../../../Chatbox/Chatbox';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { withStyles } from '@material-ui/core/styles'

const StyledSendIcon = withStyles({
    root: {
        color: '#10D4C3',
        fontSize: 26,
        marginTop: 10,
        paddingLeft: 15,
        paddingBottom: 10
    }
})(SendRoundedIcon)

export const Chatbox = ({ style }) => {

    const [comment, setComment] = useState('');

    const onBlurHandler = comment => {
        setComment(comment);
    }
    const sendMessage = comment => {
        console.log(comment);
        setComment('');
    }
    return (
        <div style={style}>
            <div style={{marginTop: 15, marginLeft: 15, display: 'flex'}}>
                <ChatBox placeholder="Add a Comment" comment={comment} onBlurHandler={onBlurHandler} sendMessage={sendMessage}/>
                <StyledSendIcon onClick={()=>sendMessage(comment)}/>
            </div>
        </div>
    )
}

Chatbox.defaultProps = {
    style: {
        width: '40.4%', 
        backgroundColor: 'white', 
        height: 70, 
        position: 'fixed', 
        bottom: 0,
        border: '2px solid #F2F2F2',
        dispaly: 'flex',
    }
}
