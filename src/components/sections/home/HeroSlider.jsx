import { useState } from 'react';
import { Icon } from '@ui';
import { Carousel } from '@Carousel';

const sliderButtons = [
  { name: "ArrowLeft", side: "left" },
  { name: "ArrowRight", side: "right" }
];

const images = [
  '/src/assets/images/hero image 1.png',
  '/src/assets/images/hero image 2.png',
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNav = (side) => {
    setIndex((prev) =>
      side === "left"
        ? Math.max(prev - 1, 0)
        : Math.min(prev + 1, images.length - 1)
    );
  };

  return (
    <section className="pb-10 flex flex-col gap-8">
      <div className="relative w-full h-[304px] 2xl:h-[536px] overflow-hidden">
        <Carousel index={index} onChange={setIndex}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full h-full object-cover object-bottom-right flex-shrink-0"
            />
          ))}
        </Carousel>

        {sliderButtons.map((button, i) => (
          <button
            key={i}
            onClick={() => handleNav(button.side)}
            className={`absolute top-[238px] ${
              button.side === "left" ? "left-6" : "right-6"
            } size-13 rounded-full flex items-center justify-center bg-white`}
          >
            <Icon name={button.name} className="w-4.5 h-4" />
          </button>
        ))}

        <div className="absolute bottom-9.25 left-1/2 -translate-x-1/2 flex gap-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`size-2 rounded-full ${
                i === index ? "bg-black" : "bg-[var(--neutral-1-100)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
