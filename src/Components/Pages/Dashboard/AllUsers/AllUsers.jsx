import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";


const AllUsers = () => {
    
    const axiosSecure = useAxiosSecure()

    const {data:users=[]}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
           const res = await axiosSecure.get('/users')
           return res.data
        }
    })

    return (
        <div>
           <div className="flex justify-evenly items-center">
           <h2 className="text-5xl mb-2 font-bold">All Users</h2>
           <h2 className="text-2xl">Total Users: {users.length}</h2>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user=>  <tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="text-2xl"><FaUsers className="bg-orange-400 text-white p-1 rounded-md"></FaUsers></td>
            <td className="text-2xl"><FaTrash className="bg-red-600 text-white p-1 rounded-md"></FaTrash></td>
          </tr>)
      }
    

    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;