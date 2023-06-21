
import useState from 'react'
const useToggleItems = (arr,position) => {
    // const [state,setToggle] = useState(arr[position])
    console.log(arr[position])
    const toggle = ()=>{
        console.log("toggle")
    }
    
    return [arr[position],toggle]
};

export { useToggleItems };
