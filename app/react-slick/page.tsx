"use client";
//import ReactSlick from "../components/react-slick";
import Sample from "../components/react-slick/sample";

const slides = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
];

export default function ReactSlickPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 py-16 w-full h-full max-w-7xl mx-auto!">
      <p>React Slick</p>
      <Sample slidesToShow={3} autoplay autoplaySpeed={2500}>
        {slides.map((src, i) => (
          <div key={i} className="slide">
            <div className="slide-inner">
              <img src={src} alt={`slide-${i}`} />
            </div>
          </div>
        ))}
      </Sample>
      {/* <ReactSlick totalSlides={3} /> */}
    </div>
  );
}
