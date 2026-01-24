import { useCarousel, useSwipe } from '@/hooks';
import { CarouselTrack, CarouselNavButton } from '@ui';
import { HOME_HERO_IMAGES } from '@data';

const HeroSlider = () => {
    // Shared carousel state
    const { activeIndex, hasPrev, hasNext, handleNext, handlePrev, setActiveIndex } =
        useCarousel(HOME_HERO_IMAGES, 0);

    // Enable swipe on all devices
    const swipeHandlers = useSwipe({
        onSwipeLeft: handleNext,
        onSwipeRight: handlePrev,
    });

    return (
        <section
            data-title='Hero Slider'
            className="px-8 2xl:px-40 pb-10 flex flex-col gap-8"
        >
            {/* Slider container */}
            <div
                {...swipeHandlers}
                className='relative overflow-hidden'
            >
                <CarouselTrack
                    images={HOME_HERO_IMAGES}
                    activeIndex={activeIndex}
                    className='w-full h-[304px] 2xl:h-[536px]'
                />

                {/* Left & Right buttons */}
                <CarouselNavButton
                    direction="left"
                    variant='lg'
                    disabled={!hasPrev}
                    onClick={handlePrev}
                    className="hidden 2xl:flex left-10.25"
                />

                <CarouselNavButton
                    direction="right"
                    variant='lg'
                    disabled={!hasNext}
                    onClick={handleNext}
                    className="hidden 2xl:flex right-10.25"
                />

                {/* Pagination dots */}
                <div className="absolute bottom-7.25 2xl:bottom-9.25 left-1/2 -translate-x-1/2 flex gap-4">
                    {HOME_HERO_IMAGES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`size-2 rounded-full bg-n1100 transition-all duration-500 cursor-pointer ${i === activeIndex ? 'w-7.5' : ''
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Slider caption */}
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-4 2xl:gap-6">
                <h4 className="2xl:w-[643px] text-n7100 2xl:text-[72px] 2xl:leading-[76px] 2xl:tracking-[2px]">
                    Simply Unique<span className="text-n4100">/</span>
                    <br />
                    Simply Better<span className="text-n4100">.</span>
                </h4>
                <p className="2xl:w-[424px] caption-1 2xl:body-2 text-n4100">
                    <span className="caption-1-semi neutral-5-100">3legant </span>
                    is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                </p>
            </div>
        </section>
    );
};

export default HeroSlider;
