import { COFFEE_SUCCESS, EMP_SUCCESS, RESTAURANT_SUCCESS } from "./actionType";


const initialState = {
    coffeeData: [],
    restaurantData: [],
    employeeData : []

};

const reducer = (state = initialState,{type,payload}) => {

  switch(type){
    

    case COFFEE_SUCCESS :
    return {...state , coffeeData : [...payload]
    } 
    case RESTAURANT_SUCCESS :
    return {...state , restaurantData : [...payload]
    } 
    case EMP_SUCCESS :
    return {...state , employeeData : [...payload]
    } 

    default : return state
  }

};

export { reducer };