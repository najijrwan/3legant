import { useSwipe, useCarousel } from '@/hooks';
import { Icon, Badges } from '@ui';

const ProductCarouselBase = ({
    images = [],
    badgesPosition,
    containerClass,
    imageClass,
    enableSwipe,
}) => {
    const { activeIndex, hasPrev, hasNext, handleNext, handlePrev } = useCarousel(images, 0);

    const swipeHandlers = useSwipe({
        onSwipeLeft: handleNext,
        onSwipeRight: handlePrev,
    });

    return (
        <div className="relative overflow-hidden" {...swipeHandlers}>
            <div
                className="
                w-[311px] 2xl:w-[549px] h-[414px] 2xl:h-[728px]
                flex items-center
                bg-n2100 2xl:bg-white
                transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Product image ${i + 1}`}
                        className={`w-full ${i === 0 ? 'h-[360px]' : 'h-full'} object-cover flex-shrink-0`}
                    />
                ))}
            </div>

            <Badges variant='large' containerClass='left-6 top-6' />

            <button
                disabled={!hasPrev}
                onClick={handlePrev}
                className={`
                        absolute left-6 top-1/2 -translate-y-1/2
                        size-10
                        flex items-center justify-center
                        bg-white rounded-full
                        ${!hasPrev ? 'cursor-not-allowed' : ''}
                    `}
            >
                <Icon
                    name='ArrowLeft'
                    spanClassName='size-6'
                    iconClassName={`
                        w-[14px] h-[12px] shadow-1
                        ${!hasPrev ? 'text-n4100' : 'text-7100'}`}
                />
            </button>

            <button
                disabled={!hasNext}
                onClick={handleNext}
                className={`
                        absolute right-6 top-1/2 -translate-y-1/2
                        size-10
                        flex items-center justify-center
                        bg-white rounded-full
                        ${!hasNext ? 'cursor-not-allowed' : ''}
                    `}
            >
                <Icon
                    name='ArrowRight'
                    spanClassName='size-6'
                    iconClassName={`
                        w-[14px] h-[12px] shadow-1
                        ${!hasNext ? 'text-n4100' : 'text-n7100'}`}
                />
            </button>
        </div>
    );
};

export default ProductCarouselBase;
