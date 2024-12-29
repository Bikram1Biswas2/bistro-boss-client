import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
           <Cover img={img} title="Our Menu" description="Would You Like To Try A Dish?"></Cover>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default OurMenu;