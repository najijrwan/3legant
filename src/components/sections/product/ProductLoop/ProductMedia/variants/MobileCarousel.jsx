import { useSwipe, useCarousel } from '@/hooks';
import { Icon } from '@ui';

const MobileCarousel = ({ images = [] }) => {
    const { activeIndex, hasPrev, hasNext, handleNext, handlePrev } = useCarousel(images, 0);

    const swipeHandlers = useSwipe({
        onSwipeLeft: handleNext,
        onSwipeRight: handlePrev,
    });

    return (
        <div className="relative w-full h-[400px] sm:h-[500px]" {...swipeHandlers}>
            <div
                className="h-full flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Product image ${i + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Optional buttons */}
            <button
                disabled={!hasPrev}
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full"
            >
                <Icon name="ArrowLeft" spanClassName="size-6" />
            </button>
            <button
                disabled={!hasNext}
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full"
            >
                <Icon name="ArrowRight" spanClassName="size-6" />
            </button>
        </div>
    );
};

export default MobileCarousel;
