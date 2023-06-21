import { useDispatch, useSelector } from "react-redux"
import { handleTheme } from "../Redux/action"

export default function Theme(){


    const dispatch = useDispatch()
    const theme = useSelector((state)=>state.theme.theme)

    const light = ()=>{
        dispatch(handleTheme("light"))
    }
    const dark = ()=>{
        dispatch(handleTheme("dark"))
    }


    return <div>
        <button onClick={light} disabled={theme=="light"} >Switch to Light</button><button onClick={dark} >Switch to Dark</button>
    </div>
}