/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "@/lib/data";

import "./test.css";

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
