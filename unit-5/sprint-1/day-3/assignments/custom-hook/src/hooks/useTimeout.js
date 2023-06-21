import {useEffect, useRef, useState} from 'react'
const useTimeout = (delay) => {
    const [ready,setReady] = useState(false)
    let {current:id}  = useRef()
    useEffect(()=>{
        id = setTimeout(()=>{
            setReady(true)
        },delay)
    },[])
    return ready
};

export default useTimeout;
