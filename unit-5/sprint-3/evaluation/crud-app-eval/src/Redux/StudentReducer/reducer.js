import { STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS } from "./actionTypes"

let initialState = {
    isLoading: false,
    isError: false,
    students: [],
  }

  export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case STUDENT_REQUEST_PENDING :
            return {...state , isLoading:true}
        case STUDENT_REQUEST_SUCCESS :
            return {...state , isLoading : false, students : [...payload]}
        case STUDENT_REQUEST_FAILURE :
            return {...state , isError:true}
        default : return state
    }
  }