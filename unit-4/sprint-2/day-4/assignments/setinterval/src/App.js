import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Timer from './timer';
function App() {

  const [time,setTime] = useState(true)
  
  return (
    <div className="App">
      {time && <Timer/>}
      <button onClick={()=>setTime(!time)}>Timer</button>
     
    </div>
  );
}

export default App;
