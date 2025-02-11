import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import banner from "../../assets/picture/banner.jpg";
import "swiper/css/effect-fade";

import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full mt-9 md:mt-[5rem]">
      {/* Custom Navigation Buttons */}
      {/*   <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-[--Tertiary-color] text-white p-3 rounded-lg z-10 hover:bg-opacity-80 transition-all duration-500"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Icon icon="ph:caret-left-thin" width="25" height="25" />
      </button> */}

      {/* Swiper Container */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        /*  autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }} */
        speed={500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="relative container w-full md:w-[90vw] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[700px] mx-auto  ">
            <div
              className="banner-animation w-full h-full flex items-center justify-start bg-no-repeat bg-contain md:bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${banner})`,
                /*  backgroundColor: "var(--light-blue)",  */ // Fallback color
              }}
            ></div>
          </section>
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination Buttons */}
      {/*   <div className="flex justify-center space-x-2 z-50 absolute left-1/2 bottom-4 transform -translate-x-1/2">
        {bg.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index
                ? "bg-lime-700 transform scale-110"
                : "bg-lime-300"
            } transition-all duration-300`}
          ></button>
        ))}
      </div> */}

      {/* Next Button */}
      {/*   <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-3 rounded-lg z-10 hover:bg-opacity-80 hover:bg-lime-600 transition-all duration-500"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Icon icon="ph:caret-right-thin" width="25" height="25" />
      </button> */}
    </div>
  );
};

export default Banner;
