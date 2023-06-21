
import { Link as RouterLink } from 'react-router-dom'
import styled  from 'styled-components'

export default function ProductCard({image,title,brand,price,discount,gender,id}){
    
    return <DIV>
        <img src={image} alt='image'/>
        <h3>{title}</h3>
        <h3>{price}</h3>
        <p>Price : {price}</p>
        <p>Brand : {brand}</p>
        <p>Discount : {discount}</p>
        <p>Category : {gender}</p>
        <RouterLink to={`/edit/${id}`} ><button>Edit</button></RouterLink>
    </DIV>
}


const DIV = styled.div`
    border: 1px solid gray;
    padding: 10px;
    width: 400px;
    img{
        width: 100%;
        height: 300px;
    }
`