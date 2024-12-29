import Cover from "../../Home/Shared/Cover/Cover";
import orderImg from "../../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const OrderFood = () => {
    const [tabIndex,setTabIndex]=useState(0)
  return (
    <div>
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
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
