import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
              <h2>Welcome Back</h2>
           <div>
           {
                user? <h2>{`${user.displayName}:Back`} </h2>: <h2>Guest : Back</h2>
            }
           </div>
        </div>
    );
};

export default UserHome;