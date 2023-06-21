import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {


  const isAuth = useSelector((state)=>state.authReducer.isAuth)
  console.log("isAuth",isAuth)
  if(!isAuth){
    return <Navigate to='/login' />
  }
  return children






  // return <>{/* Complete this higher order component  */}</>;
};
