
import { NavLink } from 'react-router-dom'
let link = [
    {path:"/login",title:"Login"},
    {path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"/contact",title:"Contact"},
    {path:"/products",title:"Products"},
]

function Navbar() {

    let styles = {display:'flex', justifyContent:'space-evenly',textDecoration:'none',color:'red',fontSize:'20px'}
    return(
        <div className = "navbar" style={styles} >
            {
                link.map((el)=>(
                    <NavLink style={styles} key={el.path} to={el.path}>{el.title}</NavLink>
                ))
            }
        </div>
    )
}

export { Navbar }