import { useState } from "react";
import { Icon, HeroCarousel } from "@ui";
import { HERO_IMAGES } from '@data';

const SLIDER_BUTTONS = [
    { name: 'ArrowLeft', action: 'prev' },
    { name: 'ArrowRight', action: 'next' },
];

const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    const goNext = () =>
        setIndex((i) => Math.min(i + 1, HERO_IMAGES.length - 1));

    const goPrev = () =>
        setIndex((i) => Math.max(i - 1, 0));

    return (
        <section
            data-title='Hero Slider'
            className="
            px-8 2xl:px-40 pb-10
            flex flex-col gap-8"
        >
            {/* HERO_IMAGES Slider */}
            <div
                data-id="slider"
                className="
                relative
                w-full h-[304px] 2xl:h-[536px] 
                overflow-hidden"
            >
                <HeroCarousel
                    index={index}
                    onNext={goNext}
                    onPrev={goPrev}
                >
                    {HERO_IMAGES.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            className="
                            w-full h-full
                            shrink-0
                            object-cover object-[55%_100%] 2xl:object-bottom-right"
                        />
                    ))}
                </HeroCarousel>

                {SLIDER_BUTTONS.map((btn, i) => (
                    <button
                        key={i}
                        onClick={btn.action === 'next' ? goNext : goPrev}
                        className={`
                        absolute top-[238px]
                        ${btn.action === 'prev' ? 'left-6' : 'right-6'}
                        size-13 rounded-full
                        hidden 2xl:flex items-center justify-center
                        bg-white`}
                    >
                        <Icon name={btn.name} className="w-4.5 h-4" />
                    </button>
                ))}

                <div
                    className="
                    absolute bottom-7.25 2xl:bottom-9.25 left-1/2 -translate-x-1/2 
                    flex gap-4"
                >
                    {HERO_IMAGES.map((_, i) => (
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

            {/* Slider Caption */}
            <div
                data-id="sliderCaption"
                className="
                flex flex-col 2xl:flex-row 2xl:items-center gap-4 2xl:gap-6"
            >
                <h4 className="
                2xl:w-[643px]
                text-(--neutral-7-100) 2xl:text-[72px] 2xl:leading-[76px] 2xl:tracking-[2px]"
                >
                    Simply Unique<span className="text-(--neutral-4-100)">/</span><br />
                    Simply Better<span className="text-(--neutral-4-100)">.</span>
                </h4>
                <p className="
                2xl:w-[424px]
                caption-1 2xl:body-2 text-(--neutral-4-100)"
                >
                    <span className="caption-1-semi neutral-5-100">3legant </span>
                    is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                </p>
            </div>
        </section>
    );
};

export default HeroSlider;
