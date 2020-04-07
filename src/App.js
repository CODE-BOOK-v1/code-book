import React from 'react'
import './App.css'

import { TexaArea } from './components/TextArea/TexaArea'

const App = () => {
 
    return (
        <div>
            <TexaArea rows={6} cols={50} secondary={false} placeholder="enter text"/>
        </div>
    )
}

export default App;