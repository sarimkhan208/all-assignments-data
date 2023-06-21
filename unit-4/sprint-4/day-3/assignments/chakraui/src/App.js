
import './App.css';
import MultiDimGrid from './components/MultiDimeGrid';
import MyGrid from './components/MyGrid';
import PersonalGrids from './components/PersonalGrid';



function App() {
  return <>
  <hr/>
      <h1 style={{textAlign:'center' , fontSize:'50px'}} >First</h1>
      <PersonalGrids/>
      <h1 style={{textAlign:'center' , fontSize:'50px'}} >Second</h1>
      <MultiDimGrid/>
      <h1 style={{textAlign:'center' , fontSize:'50px'}} >Third</h1>
      <MyGrid/>
   
    </>
}

export default App;
