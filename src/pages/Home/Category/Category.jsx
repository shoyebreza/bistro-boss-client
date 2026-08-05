import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return ( 
       <Swiper
         slidesPerView={4}
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination, Autoplay]}
       >
         <SwiperSlide>
           <img src={slide1} alt="Slide 1" />
           <h3 className="text-center text-4xl uppercase text-white mt-16">Salad</h3>
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide2} alt="Slide 2" />
           <h3 className="text-center text-4xl uppercase text-white mt-16">Pasta</h3>
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide3} alt="Slide 3" />
           <h3 className="text-center text-4xl uppercase text-white mt-16">Pizza</h3>
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide4} alt="Slide 4" />
           <h3 className="text-center text-4xl uppercase text-white mt-16">Desert</h3>
         </SwiperSlide>
         <SwiperSlide>
           <img src={slide5} alt="Slide 5" />
           <h3 className="text-center text-4xl uppercase text-white mt-16">Sandwich</h3>
         </SwiperSlide>
       </Swiper>
     );
}
 
export default Category;