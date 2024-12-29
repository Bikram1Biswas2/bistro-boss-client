import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Home/Shared/MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../Home/SectionTitle/SectionTitle";


const OurMenu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item=>item.category==='offered')
    const dessert = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const salad = menu.filter(item=>item.category==='salad')
    const soup = menu.filter(item=>item.category==='soup')
    return (
        <div className="space-y-8">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
           <Cover img={img} title="Our Menu" description="Would You Like To Try A Dish?"></Cover>
           {/* popular */}
           <SectionTitle subHeading={"Don't miss "} heading={"todays offer"}></SectionTitle>
           <MenuCategory items={offered} ></MenuCategory>
           {/* Dessert */}
           <MenuCategory items={dessert} img={dessertImg} title={"Desserts"}></MenuCategory>
           {/* Pizza */}
           <MenuCategory items={pizza} img={pizzaImg} title={"Pizza"}></MenuCategory>
           {/* Salad */}
           <MenuCategory items={salad} img={saladImg} title={"Salad"}></MenuCategory>
           {/* Soup */}
           <MenuCategory items={soup} img={soupImg} title={"Soup"}></MenuCategory>
        </div>
    );
};

export default OurMenu;