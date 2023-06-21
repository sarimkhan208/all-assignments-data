import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import MainRoute from './Router/MainRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoute/>
    </div>
  );
}

export default App;
