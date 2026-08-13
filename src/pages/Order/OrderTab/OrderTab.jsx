import FoodCard from "../../../components/FoodCard/FoodCard";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
    return (
        <div>

            <Swiper
                slidesPerView={1}
                spaceBetween={24}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                {items.map(item => (
                    <SwiperSlide key={item._id}>
                        <FoodCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default OrderTab;