import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                name:result.user?.displayName,
                email:result.user?.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
         
        })
    }

    return (
        <button onClick={handleGoogleLogin} className="btn text-2xl text-orange-400">
       <FaGoogle className="mr-2"></FaGoogle>
        Google Login
      </button>
    );
};

export default SocialLogin;