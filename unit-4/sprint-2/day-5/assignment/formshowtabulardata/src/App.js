
import './App.css';
import Table from './table'
import { useState } from 'react'


let data=[]
function App() {
  
  let init = {
    name:"",
    age:"",
    address:"",
    department:"",
    salary:"",
    maritalStatus:""
  }

  const [formData,setFormData] = useState(init)
  const {name,age,address,department,salary,maritalStatus} = formData

  const handleChange = (e)=>{
    let input;
    if(e.target.type == "checkbox"){
      input = e.target.checkbox
    }
    else{
      input = e.target.value
    }
    setFormData({...formData,[e.target.name]:input})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    data.push(formData)
    console.log(data)
  }
  


  return (
    <div className="App">
      <div>
        <h1>Create Data</h1>
        <form onSubmit={handleSubmit} >
          <label>
            Name : <input type="text" name="name" value={name} onChange={handleChange} />
          </label>
          <br/>
          <br/>

          <label>
            Age : <input type="number" name="age" value={age} onChange={handleChange} />
          </label>
          <br/>
          <br/>

          <label>
            Address : <input type="text" name="address" value={address} onChange={handleChange} />
          </label>
          <br/>
          <br/>

          <label>
            department : <select type="select" name="department" value={department} onChange={handleChange}>
              <option value="testing" >Testing</option>
              <option value="debugging" >Debugging</option>
              <option value="developing" >Developing</option>
            </select>
          </label>
          <br/>
          <br/>

          <label>
            Salary : <input type="number" name="salary" value={salary} onChange={handleChange} />
          </label>
          <br/>
          <br/>

          <label>
            Matital Status : <input type="checkbox" name="checkbox" value={maritalStatus} onChange={handleChange} />
          </label>
          <br/>
          <br/>
          <input type="submit" />


        </form>

      </div>


      <div>
        <h1>Table Data</h1>
        {
          data.map((el)=>(
            <Table name={el.name} age={el.age} address={el.address} 
            department={el.department} salary={el.salary} maritalStatus={el.maritalStatus}/>
          ))
        }
        
      </div>
    </div>
  );
}

export default App;
