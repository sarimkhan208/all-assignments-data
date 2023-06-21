
import {useState , useEffect , useRef} from 'react'
function Timer(){

    const [count,setCount] = useState(10);
    const intervalId = useRef(null)
    useEffect(()=>{
        function cleanUp(){
        
            clearInterval(intervalId)
        }
        return cleanUp

    },[])

    const startTimer = ()=>{
        if(intervalId.current !== null){
            return
        }
        intervalId.current = setInterval(()=>{
            setCount((preCount)=>{
                if(preCount<1){
                    clearInterval(intervalId.current)
                    return 0
                }
                return preCount-1
            })
        },1000)
    }

    const stopTimer = ()=>{
        clearInterval(intervalId.current)
        intervalId.current = null
    }

    const resetTimer = ()=>{
        stopTimer()
        setCount(10)
    }

    return <div>
        <h1>Count Down : {count}</h1>
        <button onClick={startTimer} >Start</button>
        <button onClick={stopTimer} >Stop</button>
        <button onClick={resetTimer} >Reset</button>
    </div>

}

export default Timer