"use client";
import ReactSlick from "../components/react-slick/sample";
import CoverflowCarousel from "../components/react-slick/slickcoverflow";

export default function ReactSlickPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 py-16 w-full h-full max-w-7xl mx-auto!">
      <p>React Slick</p>

      <ReactSlick totalSlides={5} />
      {/* <CoverflowCarousel /> */}
      {/* <ReactSlick totalSlides={5} />
      <ReactSlick totalSlides={7} /> */}
      {/* <code>
        Issue:&nbsp;
        <a
          href="https://stackoverflow.com/questions/77288118/the-swiper-slider-loop-doesnt-work-properly-when-there-are-fewer-slides-than-th"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://stackoverflow.com/questions/77288118/the-swiper-slider-loop-doesnt-work-properly-when-there-are-fewer-slides-than-th
        </a>
      </code> */}
    </div>
  );
}
