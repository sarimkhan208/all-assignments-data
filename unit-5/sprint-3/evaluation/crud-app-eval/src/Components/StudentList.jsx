import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { getStudents } from '../Redux/StudentReducer/action';

import {StudentCard} from './StudentCard'


export const StudentList = () => {

  const [params] = useSearchParams()
  const students = useSelector((state)=>state.studentReducer.students)
  const dispatch = useDispatch()
  // console.log(params.getAll('batch'))
  const location = useLocation()
  let obj = {
    params : {
      batch : params.getAll('batch'),
      _limit : 10,
      _page : params.get('page')
    }
  }



  useEffect(()=>{
    dispatch(getStudents(obj))
  },[location])
  // console.log(students)

  return (
    <div>
      <div data-testid="student-list" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}} >
        {/* Map through the student list using StudentCard component  */}
        {
          students.length>0 && students?.map((el)=>(
            <StudentCard  key={el.id} poster={el.Poster} batch={el.batch} id={el.id} name={el.name}  />
          ))
        }
        

      </div>
    </div>
  );
};
