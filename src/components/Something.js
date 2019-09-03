import React, { useState } from 'react'
import useLifecycle from 'Hooks/lifecycle'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT_ID } from 'Store/actionTypes'


const Something = (props) => {
    const { componentDidMount, componentWillUnmount } = useLifecycle()
    let [state, setState] = useState({ message: 'Something'})

    const currentID = useSelector(state => state.ids.currentID)
    const dispatch = useDispatch()

    componentDidMount(() => {
        console.log('Component Something mounted!')
        dispatch({ type: INCREMENT_ID })
    })

    componentWillUnmount(() => {
        console.log('Component Something Unmounted!')
        props.onUnmounted()
    })
    
    return (
        <div className="Something">
            {state.message}: {currentID}
        </div>
    )
}


Something.propTypes = {
    onUnmounted: PropTypes.func.isRequired
}

export default Something