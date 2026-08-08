import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg"
import desertimg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaimg from "../../../assets/menu/pizza-bg.jpg"
import saladimg from "../../../assets/menu/salad-bg.jpg"
import soupimg from "../../../assets/menu/soup-bg.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return ( 
        <div>
            { /* for the title */ }
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            { /* main cover */ }
            <Cover img={menuimg} title="Our Menu"></Cover>
            <SectionTitle heading="Today's Special" subheading="Dont miss out on our delicious offerings!"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
           {/*  deserts menu items */}
           <MenuCategory items={desserts} title="Desserts" img={desertimg}></MenuCategory>
           <MenuCategory items={pizza} title="Pizza" img={pizzaimg}></MenuCategory>
           <MenuCategory items={salads} title="Salads" img={saladimg}></MenuCategory>
           <MenuCategory items={soups} title="Soups" img={soupimg}></MenuCategory>
        </div>
     );
}
 
export default Menu;