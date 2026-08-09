import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    
    return ( 
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)} className="text-center mt-10">
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <h2>Salad</h2>
                    <p>Delicious salad options!</p>
                </TabPanel>
                <TabPanel>
                    <h2>Pizza</h2>
                    <p>Authentic pizza recipes!</p>
                </TabPanel>
                <TabPanel>
                    <h2>Soup</h2>
                    <p>Warm and comforting soups!</p>
                </TabPanel>
                <TabPanel>
                    <h2>Desert</h2>
                    <p>Sweet and delightful desserts!</p>
                </TabPanel>
                <TabPanel>
                    <h2>Drinks</h2>
                    <p>Refreshing beverages!</p>
                </TabPanel>
            </Tabs>
        </div>
     );
}
 
export default Order;