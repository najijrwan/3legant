import { useSwipe, useCarousel } from '@/hooks';
import { Badges, CarouselTrack, CarouselNavButton, CarouselThumbs } from '@ui';

const MediaCarousel = ({ images, showBadges, showThumbs }) => {
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
            <div className='flex flex-col gap-6'>
                <CarouselTrack
                    images={images}
                    activeIndex={activeIndex}
                />

                {showThumbs && (
                    <CarouselThumbs
                        thumbnails={visibleThumbnails}
                        activeIndex={activeIndex}
                        onClick={setActiveIndex}
                    />
                )}
            </div>

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
    )
}

export default MediaCarousel;