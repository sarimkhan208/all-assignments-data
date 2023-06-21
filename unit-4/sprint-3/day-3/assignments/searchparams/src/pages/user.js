import { useEffect, useState , useParams, useContext} from "react"
import { Link, Navigate, useSearchParams } from "react-router-dom"

function User(){
    const getPage = (page) =>{
        page = Number(page);
        if(typeof page !== "number" || page<=0 || !page){
            page=1
        }
        return page
    }
    const [loading , setLoading] = useState(false)
    const [data,setaData] = useState([])
    const [searchParam,setSearchParam] = useSearchParams()
    const [page,setPage] = useState(getPage(searchParam.get("page")));
    
    const handlePage = (val)=>{
        setPage(page+val)
    }

    const getData = (url)=>{
        return fetch(url).then((res)=>res.json())
    }

    const fetchData = (page)=>{
        setLoading(true)
        getData(`https://reqres.in/api/users?page=${page}`)
        .then((res)=>{setLoading(false)
                    setaData(res.data)})
        .catch((err)=>console.log(err))
    }



    useEffect(()=>{
        fetchData(page)
    },[page])

    useEffect(()=>{
        setSearchParam({page:page})
    },[page])
    
    if(loading){
        return <h1>Loading....</h1>
    }
    

    

    return <div>
    <h1>User Page</h1>
    {
        data.map((el)=>(
            <div style={{border:'1px solid grey',margin:"15%"}} key={el.id} >
                <img src={el.avatar} alt={el.first_name}/>
                <h2>{el.first_name}</h2>
                <h3>{el.email}</h3>
                <Link to={`/user/${el.id}`}>More info</Link>
            </div>
        ))
    }
    <Link to="/"><button>Home</button></Link>
    <button onClick={()=>handlePage(-1)} >PREV</button>
    <button>{page}</button>
    <button onClick={()=>handlePage(+1)}>NEXT</button>
    
    </div>
}
export default User