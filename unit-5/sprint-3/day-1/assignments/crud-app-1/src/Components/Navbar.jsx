import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar(){
    return <DIV>
        <h3>Shopping App</h3>
        <Link to='/' >Home</Link>
        <Link to='/login' >Login</Link>
        <Link to='/admin' >Admin</Link>
    </DIV>
}


const DIV = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
    gap:20px;
`