import React, { useState, useEffect } from 'react';
import { TEXT_AREA } from '../../utils/theme';
import './TextArea.css';

export const TextArea = ({ rows, cols, placeholder, onValue, secondary=false }) => {
    const [ text, setText ] = useState('');
    useEffect(()=> {
        setText(onValue);
    }, [onValue]);

    const styles = {
        container: {
            border: `2px solid ${secondary ? TEXT_AREA.SECONDARY_BORDER_COLOR: TEXT_AREA.PRIMARY_BORDER_COLOR}`,
            backgroundColor: secondary ? TEXT_AREA.SECONDARY_BACKGROUND_COLOR : TEXT_AREA.PRIMARY_BACKGROUND_COLOR,
            color: secondary ? TEXT_AREA.SECONDARY_TEXT_COLOR : TEXT_AREA.PRIMARY_TEXT_COLOR 
        }
    }

    return (
        <textarea 
            className="textarea-container"
            style={styles.container}
            rows={rows} 
            cols={cols} 
            placeholder={placeholder} 
            value={text}
            onChange={e => setText(e.target.value)}
            readOnly={secondary}
        >
            {text}
        </textarea>
    )
}
