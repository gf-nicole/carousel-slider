"use client";
import ReactSwiper from "./components/react-swiper";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 py-16 w-full h-full max-w-7xl overflow-hidden mx-auto!">
      <p>React Swiper</p>

      <ReactSwiper
        label="Coverflow Effect with 3 slides"
        effect={"coverflow"}
        totalSlides={3}
      />
      <ReactSwiper
        label="Coverflow Effect with 5 slides"
        effect={"coverflow"}
        totalSlides={5}
      />

      <ReactSwiper
        label="Coverflow Effect with 7 slides"
        effect={"coverflow"}
        totalSlides={7}
      />

      <code>
        Issue:&nbsp;
        <a
          href="https://stackoverflow.com/questions/77288118/the-swiper-slider-loop-doesnt-work-properly-when-there-are-fewer-slides-than-th"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://stackoverflow.com/questions/77288118/the-swiper-slider-loop-doesnt-work-properly-when-there-are-fewer-slides-than-th
        </a>
      </code>
    </div>
  );
}
