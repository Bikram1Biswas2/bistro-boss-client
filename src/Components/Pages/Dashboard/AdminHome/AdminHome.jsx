import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAdmin from "../../../../hooks/useAdmin";


const AdminHome = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    return (
        <div>
            <h2 className="text-3xl font-bold">Welcome Back</h2>
           <div>
           {
                isAdmin? <h2 className='text-xl'>{`${user.displayName}`} </h2>: <h2>Admin : Back</h2>
            }
           </div>
        </div>
    );
};

export default AdminHome;