import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
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