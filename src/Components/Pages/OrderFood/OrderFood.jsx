import Cover from "../../Home/Shared/Cover/Cover";
import orderImg from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../Home/Shared/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";


const OrderFood = () => {
    const [tabIndex,setTabIndex]=useState(0)
    const [menu] = useMenu()
    const pizza = menu.filter(item=>item.category==='pizza')
    const offered = menu.filter(item=>item.category==='offered')
    const dessert = menu.filter(item=>item.category==='dessert')
    const salad = menu.filter(item=>item.category==='salad')
    const soup = menu.filter(item=>item.category==='soup')
    const drinks = menu.filter(item=>item.category==='drinks')
  return (
    <div className="space-y-5">
      <Cover
        img={orderImg}
        title={"Order Food"}
        description="Would you like to try a dish?"
      ></Cover>
      {/* Tabs */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {
                dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
              }
            </div>
        </TabPanel>
      </Tabs>
     
    </div>
  );
};

export default OrderFood;
