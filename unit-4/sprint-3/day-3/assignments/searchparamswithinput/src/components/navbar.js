import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/authContext";


let link = [
    {path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"/contact",title:"Contact"},
    {path:"/user",title:"User"},
    {path:"/login",title:"Login"},
]

function Navbar(){

    const {isAuth} =  useContext(AuthContext)

    const activeStyle = {textDecoration:'none',color:'red'};
    const defaultStyle = {textDecoration:'none',color:'teal'};
    const styles = {display:'flex',justifyContent:'space-evenly',fontSize:'25px'}
    return <div style={styles} >
            {
            link.map((el)=>(
                <NavLink style={({isActive})=>{return isActive?activeStyle:defaultStyle}}
                 key={el.path} to={el.path} >{el.title}</NavLink>))
            }<p>IS AUTH : {isAuth?"YES":"NO"}</p>
            
    </div>
}

export default Navbar