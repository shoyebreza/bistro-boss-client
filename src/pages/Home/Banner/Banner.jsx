import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel'; 

const Banner = () => {
    return ( 
        <Carousel>
            <div>
                <img src="https://i.ibb.co/0j1Z7kM/banner1.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://i.ibb.co/0j1Z7kM/banner1.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://i.ibb.co/0j1Z7kM/banner1.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
     );
}
 
export default Banner;