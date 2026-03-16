"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import "./sample.css";

export type CarouselProps = {
  children: React.ReactNode;

  slidesToShow?: number;
  speed?: number;
  infinite?: boolean;
  centerMode?: boolean;
  centerPadding?: string;

  arrows?: boolean;
  dots?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;

  responsive?: Settings["responsive"];
};

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button className="carousel-arrow next" onClick={onClick}>
    →
  </button>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button className="carousel-arrow prev" onClick={onClick}>
    ←
  </button>
);

const Carousel: React.FC<CarouselProps> = ({
  children,

  slidesToShow = 3,
  speed = 500,
  infinite = true,
  centerMode = true,
  centerPadding = "60px",

  arrows = true,
  dots = false,
  autoplay = false,
  autoplaySpeed = 3000,

  responsive = [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
}) => {
  const settings: Settings = {
    slidesToShow,
    speed,
    infinite,
    centerMode,
    centerPadding,

    arrows,
    dots,
    autoplay,
    autoplaySpeed,

    responsive,

    nextArrow: arrows ? <NextArrow /> : undefined,
    prevArrow: arrows ? <PrevArrow /> : undefined,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
