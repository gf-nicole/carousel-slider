import EmblaDynamicCarousel from "../components/embla-carousel";

export default function EblaCarouselPage() {
  const slides = [
    <div
      key="slide-1"
      className="bg-red-200 h-40 flex items-center justify-center"
    >
      Slide 1
    </div>,
    <div
      key="slide-2"
      className="bg-blue-200 h-40 flex items-center justify-center"
    >
      Slide 2
    </div>,
    <div
      key="slide-3"
      className="bg-green-200 h-40 flex items-center justify-center"
    >
      Slide 3
    </div>,
    <div
      key="slide-4"
      className="bg-yellow-200 h-40 flex items-center justify-center"
    >
      Slide 4
    </div>,
    // <div
    //   key="slide-5"
    //   className="bg-purple-200 h-40 flex items-center justify-center"
    // >
    //   Slide 5
    // </div>,
  ];

  return (
    <EmblaDynamicCarousel
      slides={slides}
      slidesPerView={{
        mobile: 1,
        tablet: 2,
        desktop: 4,
      }}
      loop
      showButtons
      centerMode={true}
    />
  );
}
