import "./App.css";
import { Stack , Center , Button } from "@chakra-ui/react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import { Navigate } from "react-router-dom";
import {useState} from 'react'

// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
// let Stack = () => <div />;
// let Center = () => <div />;
// let Button = () => <div />;
function App() {

  const [flag,setFlag] = useState(true)

  

  return (
    <Stack p={5} className="App">
      <Center>
        <Button width="200px"  onClick={()=>setFlag(!flag)} className="toggleForm">{flag?"Show Dashboard Page":"Show Add Cats Page"}</Button>
      </Center>

      {/* toggle between form and dashboard */}
      {
        flag?<Form/>:<Dashboard/>
      }
    </Stack>
  );
}

export default App;
