import {Link} from 'react-router-dom'
export default function Navbar(){
    return <div style={{display : 'flex' , justifyContent : 'space-evenly'}} >
        <Link to='/login'>Login</Link>
        <Link to='/registration' >Registration</Link>
    </div>
}