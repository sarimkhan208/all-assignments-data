
import './App.css';
import {useState} from 'react'
import Watch from './watch';

function App() {
  const [time, setTime] = useState(true)
  return (
    <div className="App">
      {time && <Watch/>}
      <button onClick={()=>{setTime(!time)}}>Timer</button>
    </div>
  );
}

export default App;
