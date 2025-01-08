import { FaTrash } from "react-icons/fa";
import useMenu from "../../../../hooks/useMenu";
import SectionTitle from "../../../Home/SectionTitle/SectionTitle";
import { TfiWrite } from "react-icons/tfi";

const ManageItems = () => {
    const [menu] = useMenu();

    const handleDeleteItem = (item)=>{

    }

    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image || "https://via.placeholder.com/150"}
                                                    alt={item.name || "Item Image"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>{item.name}</div>
                                </td>
                                <td>${item.price}</td>
                                <td className="text-2xl">
                                    <button className="btn btn-ghost"><TfiWrite className="bg-orange-500 text-white"/></button>
                                </td>
                                <td className="text-2xl"><FaTrash onClick={()=>handleDeleteItem(item)} className="bg-red-600 text-white p-1 rounded-md"></FaTrash></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
