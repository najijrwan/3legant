import { useSwipe, useCarousel } from '@/hooks';
import { Badges } from '@ui';
import { CarouselTrack, CarouselNavButton, CarouselThumbs } from '@ui';

const MediaCarousel = ({ images, showThumbs }) => {
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

    return (
        <div className="relative overflow-hidden" {...swipeHandlers}>
            <CarouselTrack images={images} activeIndex={activeIndex}>
                <Badges
                    variant='large'
                    containerClass='left-6 top-6 2xl:left-8 2xl:top-8' />
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
            </CarouselTrack>

            {showThumbs && (
                <CarouselThumbs thumbnails={visibleThumbnails} activeIndex={activeIndex} onClick={setActiveIndex} />
            )}
        </div>
    )
}

export default MediaCarousel;