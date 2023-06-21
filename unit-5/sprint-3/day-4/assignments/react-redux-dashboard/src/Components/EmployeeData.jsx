import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {

	const dispatch = useDispatch()
  	const emp = useSelector((state)=>state.employeeData)
  
	useEffect(()=>{
		dispatch(getEmployeeData)
	},[])
	// console.log(emp)

	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont">
				{/* Map the below div against yoru employee data */}

				{
					emp.map((el)=>(
						<div className="employee" style={{ width: "250px" }} key={el.id} >
							<img className="image" src={el.image} alt="img" width="70%" />
							<div className="name">{el.name}</div>
							<div className="gender">{el.gender}</div>
							<div className="department">{el.department}</div>
						</div>
					))
				}



				
			</div>
		</div>
	);
}
