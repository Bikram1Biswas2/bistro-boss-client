import Cover from "../../Home/Shared/Cover/Cover";
import orderImg from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../../Home/Shared/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OrderFood = () => {
    const categories = ['dessert','salad','pizza','soup','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu] = useMenu()
   
    

    const pizza = menu.filter(item=>item.category==='pizza')
    const dessert = menu.filter(item=>item.category==='dessert')
    const salad = menu.filter(item=>item.category==='salad')
    const soup = menu.filter(item=>item.category==='soup')
    const drinks = menu.filter(item=>item.category==='drinks')
  return (
    <div className="space-y-5">
        <Helmet>
            <title>Bistro Boss | Order Food</title>
        </Helmet>
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
           <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
     
    </div>
  );
};

export default OrderFood;
