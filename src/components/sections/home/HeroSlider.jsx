import { useState } from "react";
import { Icon } from "@ui";
import { Carousel } from "@Carousel";

const SLIDER_BUTTONS = [
    { name: "ArrowLeft", side: "left" },
    { name: "ArrowRight", side: "right" },
];

const IMAGES = [
    "/src/assets/images/hero image 1.png",
    "/src/assets/images/hero image 2.png",
    "/src/assets/images/hero image 3.png",
    "/src/assets/images/hero image 4.png",
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
        <section
            className="
            pb-10 
            flex flex-col gap-8"
        >
            <div
                className="
                relative
                w-full h-[304px] 2xl:h-[536px] 
                overflow-hidden"
            >
                <Carousel
                    index={index}
                    onChange={setIndex}
                >
                    {IMAGES.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            className="w-full h-full object-cover object-[55%_100%] 2xl:object-bottom-right flex-shrink-0"
                        />
                    ))}
                </Carousel>

                {SLIDER_BUTTONS.map((button, i) => (
                    <button
                        key={i}
                        onClick={() => handleNav(button.side)}
                        className={`
                        absolute top-[238px] ${button.side}-6
                        size-13 rounded-full
                        hidden 2xl:flex items-center justify-center 
                        bg-white
                        cursor-pointer `}
                    >
                        <Icon
                            name={button.name}
                            className="w-4.5 h-4"
                        />
                    </button>
                ))}

                <div
                    className="
                    absolute bottom-9.25 left-1/2 -translate-x-1/2 
                    flex gap-4"
                >
                    {IMAGES.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`
                            size-2 rounded-full
                            bg-[var(--neutral-1-100)]
                            transiton-all duration-500
                            cursor-pointer
                            ${i === index
                                    ? "w-7.5"
                                    : ""}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
