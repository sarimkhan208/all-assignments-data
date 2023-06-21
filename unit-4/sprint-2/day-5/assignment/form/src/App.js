
import './App.css';
import {useState} from 'react'


let init = {
  name:"",
  gender:"",
  role:"",
  maritalStatus:"",

}

function App() {

  const [formData,setFormData] = useState(init)

  const handleChange = (e)=>{
    let inputVal
    if(e.target.type == "text"){
      inputVal = e.target.value
    }
    else if(e.target.type == "checkbox"){
      inputVal = e.target.checked
    }
    else if(e.target.type == "select-one"){
      inputVal = e.target.value
    }
    setFormData({...formData,[e.target.name]:inputVal})
  }


  const formSubmit = (e)=>{
    e.preventDefault()
    console.log("ok")
  }

  console.log(formData)
  const {name,gender,role,maritalStatus} = formData
  return (
    <div className="App">

      <h1>Register Form</h1>
      <form onSubmit={formSubmit} >
        <label>
          Name : <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br/>
        <br/>

        <label>
          Gender : <select value={gender} name="role" onChange={handleChange} >
            <option value="male" >Male</option>
            <option value="female" >Female</option>
          </select>
        </label>
        <br/>
        <br/>

        <label>
          Role : <select type="select" value={role} name="role" onChange={handleChange} >
            <option value="physician" >Physician</option>
            <option value="chemicalist" >chemicalist</option>
            <option value="therapy" >therapy</option>
          </select>
        </label>
        <br/>
        <br/>

        <label>
          Marital Status : <input type="checkbox" name="maritalStatus" value={maritalStatus} onChange={handleChange}/>
        </label>
        <br/>
        <br/>
        <input value="register" type="submit" />
      </form>
    </div>
  );
}

export default App;
