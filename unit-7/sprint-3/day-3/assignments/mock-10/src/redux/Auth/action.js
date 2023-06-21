import axios from 'axios'
import { ISAUTH } from './actionType'


export const login = (obj)=>(dispatch)=>{
    console.log(obj)
    axios.post(`https://reqres.in/api/login`,obj)
    .then((res)=>dispatch({type:ISAUTH}))
    .catch((err)=>console.log(err))
}