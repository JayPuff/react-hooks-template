import React, { useState, useEffect } from 'react'
import './App.scss'

const App = () => {
    let [state, setState] = useState({ message: 'We are in react now!'})

    useEffect(() => {
        setState({ message: 'component Mounted'})
        console.log()
    }, [])

    return (
        <div className="App">
            {state.message}
        </div>
    )
}

export default App