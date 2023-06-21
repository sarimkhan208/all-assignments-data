
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import RestaurantTable from "../Components/RestaurantTable";

function Dashboard() {

  const [data,setData] = useState([])
  const {token,login,isAuth,setAuth,logout} = useContext(AuthContext)

  const fetchData = ()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
    .then((res)=>res.json())
    .then((data)=>setData(data.data))
  }

  useEffect(()=>{
    fetchData()
  },[])
  


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={()=>logout()} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{isAuth?token:""}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <RestaurantTable data={data} />
      </div>
      <div data-testid="pagination-container"></div>
    </div>
  );
}

export default Dashboard;
