import { useState } from 'react';
import Card from './Card';
let init = {
    name : "",
    height : "",
    weight : "",
    power : ""
}

const InputTags=()=>{

    const [formData,setFormData] = useState(init)
    const [data,setData] = useState([])

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setData([...data,formData])
    }
    



    const {name,height,weight,power} = formData
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Name : <input data-testid="input-name" name="name" value={name} type="text" onChange={handleChange} />
            </label>
            <label>
                Height : <input data-testid="input-height" name="height" value = {height} type="number" onChange={handleChange} />
            </label>
            <label>
                Weight : <input data-testid="input-weight" name="weight" type="number" value={weight} onChange={handleChange}/>
            </label>
            <label>
                Power : <input data-testid="input-power" name="power" type="number" value={power} onChange={handleChange}/> 
            </label>
            <button data-testid="add-button" type='submit' >Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull"  >Most Powerful Superhero</button>
        <button data-testid="all-superheroes"  >Show All</button>
        <Card data={data}  />
        </>
    )
}

export default InputTags;
