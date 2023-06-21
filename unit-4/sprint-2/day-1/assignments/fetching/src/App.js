import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
function App() {

  const [post,setPost] = useState([])

  const fetchData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>setPost(data))
    .catch((err)=>console.log(err))
  }

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={fetchData}
      >
        
        GET POSTS
        
      </button>
      <div id="post-container">
        {post.map((el)=>(<Post key={el.id} title={el.title} body={el.body} />))}
      </div>
    </div>
  );
}

export default App;
