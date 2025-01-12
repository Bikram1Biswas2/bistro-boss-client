import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: payments=[],isLoading} = useQuery({
        queryKey:['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data
        }
    })
    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Total Payments:{payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((item,index)=>   <tr key={item._id}>
            <th>{index+1}</th>
            <td>{item.price}</td>
            <td>{item.transactionId}</td>
            <td></td>
          </tr>)
      }
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;