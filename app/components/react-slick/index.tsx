/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "@/lib/data";

import "./reactslick.css";

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button className="carousel-arrow next" onClick={onClick}>
      →
    </button>
  );
};

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button className="carousel-arrow prev" onClick={onClick}>
      ←
    </button>
  );
};

const ReactSlick = (props: any) => {
  const { totalSlides } = props;
  const displaySlides = slides.slice(0, totalSlides || slides.length);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container w-full block">
      <Slider {...settings}>
        {displaySlides.map((slide) => (
          <div key={slide.id} className="px-2">
            <img
              src={slide.content}
              alt={`Slide ${slide.id}`}
              className="w-full h-auto object-cover object-center rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReactSlick;

// "use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider, { Settings, CustomArrowProps } from "react-slick";
// import { slides } from "@/lib/data";
// import "./reactslick.css";

// type Props = {
//   totalSlides?: number;
// };

// const NextArrow = ({ onClick }: CustomArrowProps) => (
//   <button className="carousel-arrow next" onClick={onClick}>
//     →
//   </button>
// );

// const PrevArrow = ({ onClick }: CustomArrowProps) => (
//   <button className="carousel-arrow prev" onClick={onClick}>
//     ←
//   </button>
// );

// const ReactSlick = ({ totalSlides }: Props) => {
//   const displaySlides = slides.slice(0, totalSlides || slides.length);

//   const settings: Settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carousel-wrapper">
//       <Slider {...settings}>
//         {displaySlides.map((slide) => (
//           <div key={slide.id} className="slide-container">
//             <img
//               src={slide.content}
//               alt={`Slide ${slide.id}`}
//               className="carousel-image"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ReactSlick;
