import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaTable, FaUsers, FaWallet } from "react-icons/fa";
import useAdmin from "../../../../hooks/useAdmin";


const AdminHome = () => {
    const {user} = useContext(AuthContext)
    const isAdmin = useAdmin()

    const axiosSecure = useAxiosSecure()


    const {data: stats={}, isLoading,error} = useQuery({
        queryKey:['admin-stats'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data 
        }
    })

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(error){
        return <h2>Error loading stats: {error.message}</h2>
    }


    return (
        <div>
            <h2 className="text-3xl font-bold">Welcome Back</h2>
           <div>
           {
  user && isAdmin && (
    <h2 className="text-xl">
      {user.displayName ? user.displayName : "User"}
    </h2>
  )
}
           </div>
           <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaWallet className="text-3xl"></FaWallet>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">{stats.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaUsers className="text-3xl"></FaUsers>
    </div>
    <div className="stat-title">Customers</div>
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaBook className="text-3xl"></FaBook>
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stats.menuItem}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
   <FaTable className="text-3xl"></FaTable>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
        </div>
    );
};

export default AdminHome;