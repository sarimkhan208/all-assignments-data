import { Link } from "react-router-dom";


export default function Navbar(){
    return <div style={{display:'flex' , justifyContent : 'space-evenly'}} >
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
    </div>
}