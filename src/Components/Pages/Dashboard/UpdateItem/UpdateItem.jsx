import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Home/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name,recipe,price,category,_id} = useLoaderData()

    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {
      console.log(data);
      // image upload to image bb and get the url
      const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
          headers:{
              'content-type': 'multipart/form-data'
          }
      })
      if(res.data.success){
          // send the menu item to the server including the image link
          const menuItem = {
              name:data.name,
              category:data.category,
              price:parseFloat(data.price),
              recipe:data.recipe,
              image:res.data.data.display_url
          }
          const menuRes =await axiosSecure.patch(`/menu/${_id}`,menuItem)
          console.log(menuRes.data);
          if(menuRes.data.modifiedCount>0){
              reset()
              // show success popup
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} is updated successfully`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      }
    console.log('with image url',res.data);
    };
    return (
        <div>
            <SectionTitle heading='Update Item' subHeading='Update Your food items'></SectionTitle>
                 <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-10">
                      {/* Recipe Name */}
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                          type="text"
                          defaultValue={name}
                          placeholder="Recipe Name"
                          {...register("name", { required: true })}
                          required
                          className="input input-bordered w-full"
                        />
                      </label>
            
                      {/* Category and Price */}
                      <div className="flex gap-6">
                        {/* Category */}
                        <div className="form-control w-1/2">
                          <div className="label">
                            <span className="label-text">Category</span>
                          </div>
                          <select
                            defaultValue={category}
                            {...register("category", { required: true })}
                            className="select select-bordered w-full"
                          >
                            <option disabled value="default">
                              Select a Category
                            </option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                          </select>
                        </div>
            
                        {/* Price */}
                        <div className="form-control w-1/2">
                          <div className="label">
                            <span className="label-text">Price</span>
                          </div>
                          <input
                            type="number"
                            defaultValue={price}
                            step="0.01"
                            placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>
                      {/* recipe details */}
                      <div>
                        <label className="form-control">
                          <div className="label">
                            <span className="label-text">Recipe Details</span>
                          </div>
                          <textarea
                            className="textarea textarea-bordered h-24"
                            {...register("recipe")}
                            placeholder="Recipe Details"
                            defaultValue={recipe}
                          ></textarea>
                        </label>
                      </div>
            
                      {/* file submit */}
                      <div>
                        <input
                          type="file"
                          {...register("image", { required: true })}
                          className="file-input w-full max-w-xs border border-black border-solid"
                        />
                      </div>
            
                      {/* Submit Button */}
                      <div>
                        <button className="btn w-full btn-outline">
                         Update Menu Item
                        </button>
                      </div>
                    </form>
                  </div>
        </div>
    );
};

export default UpdateItem;