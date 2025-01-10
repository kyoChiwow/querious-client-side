import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slider/slide1.png";
import slide2 from "../assets/slider/slide2.png";
import slide3 from "../assets/slider/slide3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div className="max-w-[95%] xl:max-w-[80%] mx-auto">
      {/* Slider div */}
      <div className="pt-5">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          style={{ height: "100%" }}
        >
          <SwiperSlide>
            <div className="w-full mx-auto px-2 xl:px-0">
              <img
                className="w-full object-cover rounded-2xl"
                src={slide1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto px-2 xl:px-0">
              <img
                className="w-full object-cover rounded-2xl"
                src={slide2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full mx-auto px-2 xl:px-0">
              <img
                className="w-full object-cover rounded-2xl"
                src={slide3}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Slider div */}
    </div>
  );
};

export default Slider;
