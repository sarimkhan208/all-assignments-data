import { useReducer, useState } from "react";
import "./App.css";
import {Box,Button,Center,Checkbox,FormControl,Heading,
FormLabel,Input,Select} from "@chakra-ui/react"

import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, {type,payload}) => {
  switch (type){
    case "name":return{
       ...state,name:payload
    }
    case "gender":return{
      ...state,gender:payload
    }
    case "role":return{
    ...state,role:payload
    }
    case "maritalStatus":return{
    ...state,maritalStatus:payload
    }
    default:{
      return state
    }
  }
};

function App() {
  // note : Remove below const and instead import them from chakra import the following components from
  // const Box = () => <div />;
  // const Button = () => <div />;
  // const Center = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const Heading = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // use Table Component from chakra ui to display the details
  // const TableContainer = () => <div />;

  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state,dispatch] = useReducer(reducer,initialState)

  

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault()
    setSubmittedData([...submittedData,state])
  }

  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit} >
          <FormControl>
            <FormLabel>Name</FormLabel>

            <Input type="text" name="name" onChange={(e)=>dispatch({type:"name",payload:e.target.value})} />
            <FormLabel>Gender</FormLabel>
            <Select name="gender" data-testid="gender-select" onChange={(e)=>dispatch({type:"gender",payload:e.target.value})} >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer Not to Say</option>
            </Select>
            <FormLabel>Role</FormLabel>
            <Select name="role" data-testid="role-select" onChange={(e)=>dispatch({type:"role",payload:e.target.value})} >
              <option>FrontEnd Developer</option>
              <option>BackEnd Developer</option>
              <option>FullStack Developer</option>
            </Select>

            <Checkbox name="maritalStatus" onChange={(e)=>dispatch({type:"maritalStatus",payload:e.target.checked})} >Married</Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
     
     
     
      {
        submittedData.length==0?<Heading data-testid="no-user-container">no users found</Heading>:
        submittedData.map((el)=>(<UserRow key={el.name} {...el} />))
        
      }

    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
