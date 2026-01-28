import { useSwipe, useCarousel } from '@/hooks';
import { Badges, CarouselTrack, CarouselNavButton, CarouselThumbs } from '@ui';

const MediaCarousel = ({ images, variant, config }) => {
    const {
        activeIndex,
        hasPrev,
        hasNext,
        handleNext,
        handlePrev,
        visibleThumbnails,
        setActiveIndex
    } = useCarousel(images, 3);

    const swipeHandlers = useSwipe({ onSwipeLeft: handleNext, onSwipeRight: handlePrev });

    const {
        showBadges = false,
        showThumbs = false,
    } = config;

    return (
        <div className="overflow-hidden" {...swipeHandlers}>
            <div className='relative'>
                <CarouselTrack
                    images={images}
                    variant={variant}
                    activeIndex={activeIndex}
                />

                {showBadges && (
                    <Badges
                        variant='large'
                        containerClass='left-6 top-6 2xl:left-8 2xl:top-8'
                    />
                )}

                <CarouselNavButton
                    direction="left"
                    disabled={!hasPrev}
                    onClick={handlePrev}
                    className="left-6 2xl:left-8"
                />

                <CarouselNavButton
                    direction="right"
                    disabled={!hasNext}
                    onClick={handleNext}
                    className="right-6 2xl:right-8"
                />
            </div>

            {showThumbs && (
                <CarouselThumbs
                    thumbnails={visibleThumbnails}
                    activeIndex={activeIndex}
                    onClick={setActiveIndex}
                />
            )}
        </div>
    )
}

export default MediaCarousel;