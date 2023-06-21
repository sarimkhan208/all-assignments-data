import {useState,useEffect} from 'react'
import PostItem from './postItem';
import './App.css';

function App() {

  const [post,setPost] = useState([])
  const [load,setLoad] = useState(false)
  const [err,setErr] = useState(false)
  const [page,setPage] = useState(1)

  useEffect(()=>{
    fetchData()
  },[page])

  function getdata(url){
    return fetch(url).then((res)=>res.json())
  }


  const fetchData = async ()=>{
    try{
      setLoad(true)
      const data = await getdata(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`)
      setPost(data)
      setLoad(false)
    }
    catch(err){
      setErr(true)
      setLoad(false)
    }

  }
  if(load){
    return <h1>Loading...</h1>
  }
  if(err){
    return <h1>Something went wrong</h1>
  }

  return (
    <div className="App">
      <ul>
        {post.map((item)=>(<PostItem key={item.id} title={item.title} completed={item.completed} />))}
      </ul>
      <button onClick={()=>{setPage(page-1)}} >Previous</button>
      <button>{page}</button>
      <button onClick={()=>{setPage(page+1)}} >Next</button>
    </div>
  );
}

export default App;
