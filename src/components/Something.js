import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import './App.scss'



const Something = (props) => {
    let [state, setState] = useState({ message: 'Something'})


    useEffect(() => {
        console.log('Component Something Mounted!')
        
        return () => {
            props.onUnmounted()
            console.log('Component Something Unmounted!')
        }

    }, [])

    return (
        <div className="Something">
            {state.message}
        </div>
    )
}


Something.propTypes = {
    onUnmounted: PropTypes.func.isRequired
}

export default Something