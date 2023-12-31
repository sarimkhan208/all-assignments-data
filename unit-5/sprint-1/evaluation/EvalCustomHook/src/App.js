import "./App.css";
import { useToggleItems } from "./hooks/useToggleItems";

function App() {
  
  const [state,toggle] = useToggleItems(["A","B","C","D"],0)
  // console.log(toggle,"toggle")
  
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <h1 data-testid="status">{state}</h1>
      <button data-testid="toggle" toggle={()=>toggle} >Toggle</button>
    </div>
  );
}

export default App;
