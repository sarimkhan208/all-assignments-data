import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Button color={'teal'} size={'large'} >Click Me</Button>
      <Counter/>
    </div>
  );
}

export default App;
