"use client";

import React, { useCallback, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import "./index.css";

export type SlidesPerView = {
  mobile: number;
  tablet: number;
  desktop: number;
};

export interface EmblaDynamicCarouselProps {
  slides: ReactNode[];
  slidesPerView?: SlidesPerView;
  loop?: boolean;
  showButtons?: boolean;
  centerMode?: boolean;
  className?: string;
}

export default function EmblaDynamicCarousel({
  slides,
  slidesPerView = { mobile: 1, tablet: 2, desktop: 3 },
  loop = false,
  showButtons = true,
  centerMode = false,
  className = "",
}: EmblaDynamicCarouselProps) {
  const options: EmblaOptionsType = {
    loop,
    align: centerMode ? "center" : "start",
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`embla ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              key={(slide as React.ReactElement).key ?? index}
              className="embla__slide px-2"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showButtons && (
        <div className="flex gap-4 mt-4">
          <button onClick={scrollPrev} className="px-4 py-2 border rounded">
            Prev
          </button>

          <button onClick={scrollNext} className="px-4 py-2 border rounded">
            Next
          </button>
        </div>
      )}

      <style jsx>{`
        .embla__slide {
          width: ${100 / slidesPerView.mobile}%;
        }

        @media (min-width: 640px) {
          .embla__slide {
            width: ${100 / slidesPerView.tablet}%;
          }
        }

        @media (min-width: 1024px) {
          .embla__slide {
            width: ${100 / slidesPerView.desktop}%;
          }
        }
      `}</style>
    </div>
  );
}
