import { forwardRef } from "react"




 const Pin = forwardRef(({forBackSpace,maxChar,forOnChange},ref) => {

    const hanldeKeyUp = (e)=>{
        if(e.keyCode === 8){
            forBackSpace(e)
        }else{
            forOnChange(e)
        }
    }


    return <input 
    maxLength={maxChar} 
    ref={ref} 
    onKeyUp = {hanldeKeyUp}
    />
})

export default Pin
