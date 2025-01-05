import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Home/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        subHeading="What's new?"
        heading="ADD AN ITEM"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-10">
          {/* Recipe Name */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", {required:true})}
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
                {...register("category", {required:true})}
                className="select select-bordered w-full"
              >
                <option disabled selected>
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
                step="0.01"
                placeholder="Price"
                {...register("price", {required:true})}
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
                {...register('recipe')}
                placeholder="Recipe Details"
              ></textarea>
            </label>
          </div>

          {/* file submit */}
          <div>
          <input type="file" {...register('image', {required:true})} className="file-input w-full max-w-xs border border-black border-solid" />
          </div>

          {/* Submit Button */}
         <div> 
            <button className="btn w-full btn-outline">Add Items<FaUtensils></FaUtensils></button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
