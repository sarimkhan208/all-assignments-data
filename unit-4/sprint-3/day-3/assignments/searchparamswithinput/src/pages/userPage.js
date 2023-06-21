import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
function UserPage(){
    const {user_id} = useParams()

    const [loading , setLoading] = useState(false)
    const [data,setaData] = useState({})
    const getData = (url)=>{
        return fetch(url).then((res)=>res.json())
    }

    const fetchData = (user_id)=>{
        setLoading(true)
        getData(`https://reqres.in/api/users/${user_id}`)
        .then((res)=>{setLoading(false)
                    setaData(res.data)})
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchData(user_id)
    },[])
    

    if(loading){
        return <h1>Loading....</h1>
    }
    
    return <div style={{border:'1px solid grey',margin:"15%"}} >
        <img src={data.avatar} alt={data.first_name}/>
        <h2>{data.first_name}</h2>
        <h3>{data.email}</h3>
    </div>
}

export default UserPage