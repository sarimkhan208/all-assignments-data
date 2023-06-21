import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { ProductList } from "../Components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { useEffect } from "react";

export const Homepage = () => {
  const store = useSelector((state)=>state)
  console.log("store",store)
  
  return (
    <DIV>
      <Sidebar />
      <ProductList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
