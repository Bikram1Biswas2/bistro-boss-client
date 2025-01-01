import { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const PrivateRoute = ({Children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return Children
    }

    return <Navigate to='/login'  state={{from:location}} replace></Navigate>
};

export default PrivateRoute;