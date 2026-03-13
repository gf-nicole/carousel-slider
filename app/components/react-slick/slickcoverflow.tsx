/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./coverflowcarousel.css";
import { slides } from "@/lib/data";

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button className="arrow next" onClick={onClick}>
    →
  </button>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button className="arrow prev" onClick={onClick}>
    ←
  </button>
);

const CoverflowCarousel = (props: any) => {
  const { totalSlides } = props;
  const displaySlides = slides.slice(0, totalSlides || slides.length);

  const settings: Settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    centerPadding: "0px",
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {displaySlides.map((slide) => (
          <div key={slide.id} className="px-2">
            <img
              src={slide.content}
              alt={`Slide ${slide.id}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoverflowCarousel;
