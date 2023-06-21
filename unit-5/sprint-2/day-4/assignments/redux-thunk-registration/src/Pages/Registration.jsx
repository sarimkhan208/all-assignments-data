import { useState } from "react"

export default function Registation(){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [mobile,setMobile] = useState("")
    const [desc,setDesc] = useState("")



    


    return <div>
        <h1>Registered Here</h1>
        <form onSubmit={handleSubmit} >
            <label>
                Name : <input value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <br/>
            <label>
                Email : <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <br/>
            <label>
                Password : <input value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <br/>
            <label>
                Username : <input value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <br/>
            <label>
                Mobile : <input value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            </label>
            <br/>
            <label>
                Description : <input value={desc} onChange={(e)=>setDesc(e.target.value)} />
            </label>
            <br/>
            <input type='submit' value='REGISTERED' />
        </form>
    </div>
}