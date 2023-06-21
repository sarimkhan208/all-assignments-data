import logo from './logo.svg';
import './App.css';
import Timeout from './timeout';
import {useState} from 'react'

function App() {
  const [timer,setTimer] = useState(true)
  return (
    <div className="App">
      {timer && <Timeout/>}
      <button onClick={()=>{setTimer(!timer)}} >Stop/Start</button>
    </div>
  );
}

export default App;
