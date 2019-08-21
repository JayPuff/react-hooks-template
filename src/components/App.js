import React, { useState, useEffect } from 'react'
import './App.scss'
import Something from './Something'

const App = () => {
    let [state, setState] = useState({ showSomething: true})

    // on mount
    useEffect(() => {
        setTimeout(() => {
            setState({ showSomething: false })
        }, 3000)
        
        return () => {
            // console.log('Component Unmounted!')
        }

    }, [])

    const somethingUnmounted = () => {
        setTimeout(() => {
            setState({ showSomething: true })

            setTimeout(() => {
                setState({ showSomething: false })
            }, 3000)
        }, 3000)
    }

    return (
        <div className="App">
            {state.showSomething ? <Something onUnmounted={somethingUnmounted}/> : null}
        </div>
    )
}

export default App