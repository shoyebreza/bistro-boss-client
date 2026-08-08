
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return ( 
        <section className="mb-12">
            <SectionTitle heading={'From Our Menu'} subheading={'Popular Items'} ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </section>
     );
}
 
export default PopularMenu;