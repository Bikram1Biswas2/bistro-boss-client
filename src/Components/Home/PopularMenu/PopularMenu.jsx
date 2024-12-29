import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popularMenu = menu.filter((item) => item.category === "popular");

  // const [menu,setMenu]=useState([])

  // useEffect(()=>{
  //    fetch('menu.json')
  //    .then(res=>res.json())
  //    .then(data=>{
  //          const popularItems = data.filter(item=> item.category === 'popular')
  //          setMenu(popularItems)
  //    })
  // },[])

  return (
    <section>
      <SectionTitle
        subHeading="Popular Items"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn border-b-4 border-black mt-4 border-t-0">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
