/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import React from "react";

// const ReactSwiper = () => {
//   const slides = [
//     {
//       id: 1,
//       content:
//         "https://thirdnaturebrewing.com/wp-content/uploads/2024/02/Sourdough_Bread1.jpg",
//     },
//     {
//       id: 2,
//       content:
//         "https://thirdnaturebrewing.com/wp-content/uploads/2024/02/Sourdough_Bread1.jpg",
//     },
//     {
//       id: 3,
//       content:
//         "https://thirdnaturebrewing.com/wp-content/uploads/2024/02/Sourdough_Bread1.jpg",
//     },
//     {
//       id: 4,
//       content:
//         "https://thirdnaturebrewing.com/wp-content/uploads/2024/02/Sourdough_Bread1.jpg",
//     },
//     {
//       id: 5,
//       content:
//         "https://thirdnaturebrewing.com/wp-content/uploads/2024/02/Sourdough_Bread1.jpg",
//     },
//     {
//       id: 6,
//       content:
//         "https://thirdnaturebrewing.com/wp-content/uploads/2024/02/Sourdough_Bread1.jpg",
//     },
//   ];
//   return (
//     <div>
//       <h1>React Swiper</h1>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={3}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <img src={slide.content} alt={`Slide ${slide.id}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ReactSwiper;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper/modules";
import { slides } from "@/lib/data";

export default function ReactSwiper(props: any) {
  const { label, totalSlides, ...rest } = props;
  const displaySlides = slides.slice(0, totalSlides || slides.length);
  return (
    <div className="w-full max-h-120">
      <p className="text-center">{label}</p>
      <Swiper
        {...rest}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        className="mySwiper"
      >
        {displaySlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.content} alt={`Slide ${slide.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
