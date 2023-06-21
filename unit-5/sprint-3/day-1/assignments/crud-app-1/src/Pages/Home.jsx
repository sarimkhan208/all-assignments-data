import styled from "styled-components";
import ProductList from "../Components/ProductList";
import { Sidebar } from "../Components/Sidebar";

export default function Home(){
    return <DIV>
        <div className="sidebar" >
            <Sidebar/>
        </div>
        <div className="product-list">
            <ProductList/>
        </div>
    </DIV>
}

const DIV = styled.div`
    display: flex;
    .sidebar{
        width: 15%;
    }
    .product-list{
        width: 85%;
    }
`