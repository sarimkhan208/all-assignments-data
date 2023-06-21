import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getRestaurantData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
	const dispatch = useDispatch()
  const restaurant = useSelector((state)=>state.restaurantData)
  
  useEffect(()=>{
    dispatch(getRestaurantData)
  },[])
//   console.log(restaurant)
	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont">
				{/* Map the below div against your restaurant Data */}
				{
					restaurant.map((el)=>(
						<div className="restaurant_item" key={el.id} >
							<img className="image"  src={el.image} alt="img" width="70%" />
							<div className="name">{el.name} </div>
							<div className="type"> {el.type}</div>
							<div className="rating"> {el.rating}</div>
							<div className="number_of_votes"> {el.number_of_votes}</div>
						</div>
					))
				}
				
			</div>
		</div>
	);
}
