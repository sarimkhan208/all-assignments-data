import { CRITICAL, LOW, MAJOR, MEDIUM } from "./actionType"


const initailState = {
    criticalData : [],
    majorData : [],
    mediumData : [],
    lowData : []

}

export const reducer = (state=initailState,{type,payload})=>{
    switch(type){
        case CRITICAL : return {...state , criticalData : [...state.criticalData , payload] }
        case MAJOR : return {...state , majorData: [...state.majorData,payload]}
        case MEDIUM : return {...state , mediumData: [...state.mediumData,payload] }
        case LOW : return {...state ,lowData: [...state.lowData,payload] }
        default : return state
    }
}