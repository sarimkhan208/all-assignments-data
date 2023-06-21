import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const isAuth = useSelector((state)=>state.authReducer.isAuth)
  console.log(isAuth)
  const location = useLocation()
  if(!isAuth){
    return <Navigate to='/login' state={location.pathname} replace />
  }
  return children
};
