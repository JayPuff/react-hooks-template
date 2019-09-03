import { useEffect } from 'react'

const useLifecycle = () => {
    let _onMount;
    let _onUnmount;

    useEffect(() => {
        if(_onMount) _onMount()

        return () => {
            if(_onUnmount) _onUnmount()
        }
    },[])

    const onMount = (callback) => {
        _onMount = callback
    }

    const onUnmount = (callback) => {
        _onUnmount = callback
    }

    return {
        componentDidMount: onMount,
        componentWillUnmount: onUnmount
    }

}

export default useLifecycle