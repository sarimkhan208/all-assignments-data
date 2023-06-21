import { Link } from "react-router-dom";

export const StudentCard = ({poster,batch,id,name,}) => {
  // console.log(poster,batch)
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
      <img src={poster} alt={name}/>
      <h3 className="student-name">{name}</h3>
      <p className="student-batch" >{batch}</p>
      <Link to={`student/${id}`} ><button className="student-detail" >View Details</button></Link>
    </div>
  );
};
