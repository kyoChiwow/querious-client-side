import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";

const Slider = () => {
  return (
    <div>
      {/* Slider div */}
      <div className="mt-10">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          style={{ height: "100%" }}
        >
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center relative">
              <img
                className="w-[350px] md:w-[550px] lg:w-[750px] xl:w-[1000px] shadow-xl rounded-2xl"
                src={slide1}
                alt=""
              />
              <div className="absolute max-w-[300px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[750px]">
                <Fade>
                  <h1 className="text-lg text-[#ff7519] xl:text-3xl font-bold text-center">
                    Welcome to Querious! Empowering your queries with the best
                    recommendations.
                  </h1>
                </Fade>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center relative">
              <img
                className="w-[350px] md:w-[550px] lg:w-[750px] xl:w-[1000px] shadow-xl rounded-2xl"
                src={slide2}
                alt=""
              />
              <div className="absolute max-w-[300px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[750px]">
                <Fade>
                  <h1 className="text-lg text-[#ff7519] xl:text-3xl font-bold text-center">
                    Driven by innovation. Powered by your needs.
                  </h1>
                  <div className="mt-4 flex justify-center items-center">
                    <NavLink to={"/queries"}>
                      <button className="btn btn-warning">All Queries</button>
                    </NavLink>
                  </div>
                </Fade>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex justify-center items-center relative">
              <img
                className="w-[350px] md:w-[550px] lg:w-[750px] xl:w-[1000px] shadow-xl rounded-2xl"
                src={slide3}
                alt=""
              />
              <div className="absolute max-w-[300px] md:max-w-[300px] lg:max-w-[450px] xl:max-w-[750px]">
                <Fade>
                  <h1 className="text-lg text-[#ff7519] xl:text-3xl font-bold text-center">
                    Join a growing community of thinkers and creators.
                  </h1>
                  <div className="mt-4 flex justify-center items-center gap-4">
                    <NavLink to={"/login"}>
                      <button className="btn btn-success">Login</button>
                    </NavLink>
                    <NavLink to={"/register"}>
                      <button className="btn btn-info">Register</button>
                    </NavLink>
                  </div>
                </Fade>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Slider div */}
    </div>
  );
};

export default Slider;
