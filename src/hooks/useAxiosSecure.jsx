import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut}=useContext(AuthContext)
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('Access Token Retrieved:', token);
        // console.log('request stopped by interceptors',token);
        config.headers.Authorization = `Bearer ${token}`
        return config
    },function(error){
        // do something with request error
        return Promise.reject(error)
    })

    // interceptors 401 and 403
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async (error)=>{
        const status =  error.response.status 
        console.log('status error un interceptor',status);
        // for 401 or 403 logOut the user and move the user to the login page
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })

  return axiosSecure
};

export default useAxiosSecure;