import axios from "axios"
import { GET_QUESTIONS } from "./actionType"
import { BaseURL } from "../../BaseURL"


export  const getQuestions =(obj)=> (dispatch) =>{
    axios.get(`${BaseURL}/questions`,obj)
    .then((res)=>dispatch({type : GET_QUESTIONS , payload : res.data}))
    .catch((err)=>console.log(err))
}