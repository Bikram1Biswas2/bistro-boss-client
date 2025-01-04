import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    
    const axiosSecure = useAxiosSecure()

    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
           const res = await axiosSecure.get('/users')
           return res.data
        }
    })

    const handleUpdatedAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount>0){
               
                Swal.fire({
                    title: "Are you sure?",
                    text: `You want to make ${user.name} admin?`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, I do"
                  }).then((result) => {
                    refetch()
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: `${user.name} is Now Admin`,
                        text: `${user.name} is Now Admin`,
                        icon: "success"
                      });
                    }
                  });
            }
        })
    }

    const handleDelete = user =>{
         Swal.fire({
          
              title: "Are you sure?",
              text: "You want to Delete this User!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`).then((res) => {
                  if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                      title: "Deleted!",
                      text: "User has been deleted.",
                      icon: "success",
                    });
                  }
                });
              }
            });
    }

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
        users.map((user,index)=>  <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
           {user.role ==='admin'? "Admin" : <td className="text-2xl"><FaUsers onClick={()=>handleUpdatedAdmin(user)} className="bg-orange-400 text-white p-1 rounded-md"></FaUsers></td>}
            <td className="text-2xl"><FaTrash onClick={()=>handleDelete(user)} className="bg-red-600 text-white p-1 rounded-md"></FaTrash></td>
          </tr>)
      }
    

    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;