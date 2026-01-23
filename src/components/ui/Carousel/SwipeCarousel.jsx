import useSwipe from '@/hooks/useSwipe';

const SwipeCarousel = ({ children, index, onNext, onPrev }) => {
    const swipeHandlers = useSwipe({
        onSwipeLeft: onNext,
        onSwipeRight: onPrev,
    });

    return (
        <div
            className="
            h-full
            flex
            transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            {...swipeHandlers}
        >
            {children}
        </div>
    );
};

export default SwipeCarousel;
