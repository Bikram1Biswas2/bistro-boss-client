import React from "react";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title,img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="card-actions justify-center mt-5">
          <Link to={`/orderFood/${title}`} className="btn text-yellow-700 border-b-4 border border-current border-t-0 ">
            Order Your Favorite Food
          </Link>
        </div>
    </div>
  );
};

export default MenuCategory;
