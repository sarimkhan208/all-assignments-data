import { NavLink } from "react-router-dom"


let link = [
    {path:"/",title:"Home"},
    {path:"/setting",title:"Setting"},
    {path:"/dashboard",title:"Dashboard"},
    {path:"/login",title:"Login"},
]


export default function Navbar(){
    const activeStyle = {textDecoration:'none',color:'yellow'};
    const defaultStyle = {textDecoration:'none',color:'blue'};
    const styles = {display:'flex',justifyContent:'space-evenly',fontSize:'25px'}
    return <div style={styles} >
            {
            link.map((el)=>(
                <NavLink style={({isActive})=>{return isActive?activeStyle:defaultStyle}}
                 key={el.path} to={el.path} >{el.title}</NavLink>))
            }
            
    </div>

}