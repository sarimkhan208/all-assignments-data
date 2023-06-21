import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const StudentDetail = () => {


  const {id} = useParams()
  const [singleStd,setStd] = useState('')
  const student = useSelector((state)=>state.studentReducer.students)
  useEffect(()=>{
    let data = student.find((el)=>el.id==id)
    setStd(data)
  },[])
  console.log(singleStd)

  return (
    <div className={"student-card"}>
      <h3 className="student-id">{singleStd.id}</h3>
      <img src={singleStd.Poster} className='student-image' />
      <h3 className="student-name" >{singleStd.name}</h3>
      <p className="student-code" >{singleStd.student_code
}</p>
      <p className="student-batch" >{singleStd.batch}</p>
      <p className="student-score" >{singleStd.score}</p>
      <h3 className="student-green-card" >{singleStd.green_card}</h3>
    </div>
  );
};
