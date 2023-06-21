import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className = "navbar" >
            <Link to="/coffee-data" >Coffee Data</Link>
            <Link to="/employee-data" >Employee Data</Link>
            <Link to="/restaurant-data" >Restaurant Data</Link>
        </div>
    )
}

export { Navbar }