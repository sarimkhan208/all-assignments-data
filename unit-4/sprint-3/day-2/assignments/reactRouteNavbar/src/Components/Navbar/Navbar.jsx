import React from 'react'
import { Link } from 'react-router-dom'
let link = [
  {path:"/",title:"Home"},
  {path:"/contact",title:"Contact"},
  {path:"/about-us",title:"About"},
  {path:"/services",title:"Services"},
  {path:"/login",title:"Login"}
]

function NavBar() {
  return (
    <>
      {link.map((el)=>(
        <Link key={el.path} to={el.path} >{el.title}</Link>
      ))}
    </>
  )
}

export default NavBar
