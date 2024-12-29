import React from "react";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title,img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
