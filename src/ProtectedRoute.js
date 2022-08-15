import { useSelector } from "react-redux";
import { Navigate, NavLink, Outlet } from "react-router-dom";




const ProtectedRoute = () => {
    const {useToken } = useSelector(state=>state.user)

    if(!useToken){
        return <Navigate to="/login"/>

    }
    return <Outlet/>
    
};

export default ProtectedRoute;