import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({children}){
    const {isAuth} = useSelector((state)=>state.authReducer)
    const location = useLocation()

    if(!isAuth){
        return <Navigate to='/login' state={location.pathname} replace />
    }
    return children
}