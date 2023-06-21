import logo from './logo.svg';
import './App.css';
import Pintab from './Components/Pintab';
import {useState } from 'react';

function App() {
  const [otp,setOtp] = useState("")
  return (
    <div className="App">
      <Pintab length={4} maxChar={1} setOtp={setOtp} />
      OTP is {otp}
    </div>
  );
}

export default App;
