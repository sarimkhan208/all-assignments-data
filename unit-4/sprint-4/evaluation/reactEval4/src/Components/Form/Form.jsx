// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import {Button , FormControl , Input} from '@chakra-ui/react'
import {useReducer} from 'react'
import axios from 'axios'

// let Button = () => <div />;
// let FormControl = () => <div />;
// let Input = () => <div />;


let initialState = {
  name : "",
  cost : "",
  likes : "",
  description : "",
  breed : ""
}


function reducer(state,{type,payload}){
  switch(type){
    case "name":return{
      ...state , name:payload
    }
    case "cost":return{
      ...state , cost:payload
    }
    case "likes":return{
      ...state , likes:payload
    }
    case "description":return{
      ...state , description:payload
    }
    case "breed":return{
      ...state , breed:payload
    }
    default:{
      return state
    }

  }
}

export default function Form() {


  const AddData = (obj)=>{
    axios({
      method : 'post',
      url : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`,
      data : obj
    })
  }

  const [state,dispatch] = useReducer(reducer,initialState);

  const handleSubmit = (e)=>{
    e.preventDefault()
    AddData(state)
  }




  return (
    <div className="addCatContainer">
      <form className="form" onSubmit={handleSubmit} >
        <FormControl >
          <Input className="name" placeholder="Name" name="name" 
          onChange={(e)=>dispatch({type:"name",payload:e.target.value})}  />
          <Input className="cost" placeholder="Cost" type="number" name="cost"
          onChange={(e)=>dispatch({type:"cost",payload:e.target.value})}/>

          <Input className="likes" placeholder="Likes" type="number" name="likes"
          onChange={(e)=>dispatch({type:"likes",payload:e.target.value})} />


          <Input className="description" placeholder="Description" name="description"
          onChange={(e)=>dispatch({type:"description",payload:e.target.value})} />


          <Input className="breed" placeholder="Breed" name="breed" 
          onChange={(e)=>dispatch({type:"breed",payload:e.target.value})}/>


          <Button colorScheme={"green"} className="submitBtn" type='submit'   >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
