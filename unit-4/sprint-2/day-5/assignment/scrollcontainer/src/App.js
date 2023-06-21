
import './App.css';
import { useRef } from 'react'

function App() {


  const containerRef = useRef(null);

  const scrollToTop = () => {
    containerRef.current.scrollTop = 0;
  };

  const scrollToBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  

  return (
    <div ref={containerRef}  className="App"  style={{ maxHeight: "300px", overflowY: "auto" }}>

      
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>
      <h1>dummy data</h1>

      
    </div>
  );
}

export default App;
