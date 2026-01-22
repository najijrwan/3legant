import { useState } from 'react';
import { Icon, Badges } from '@ui';

const THUMB_COUNT = 3;

const DesktopCarousel = ({ images = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbStart, setThumbStart] = useState(0);

    const maxThumbStart = Math.max(
        0,
        images.length - (THUMB_COUNT + 1)
    );

    const hasPrev = activeIndex > 0;
    const hasNext = activeIndex < images.length - 1;

    const handleNext = () => {
        if (!hasNext) return;

        const nextIndex = activeIndex + 1;
        setActiveIndex(nextIndex);

        // move thumbnails only if not frozen
        if (
            nextIndex > thumbStart &&
            thumbStart < maxThumbStart
        ) {
            setThumbStart(prev =>
                Math.min(prev + 1, maxThumbStart)
            );
        }
    };

    const handlePrev = () => {
        if (!hasPrev) return;

        const prevIndex = activeIndex - 1;
        setActiveIndex(prevIndex);

        // move thumbnails back only if needed
        if (prevIndex < thumbStart) {
            setThumbStart(prevIndex);
        }
    };

    const visibleThumbnails = images.slice(
        thumbStart + 1,
        thumbStart + 1 + THUMB_COUNT
    );

    return (
        <div className="flex flex-col gap-6">
            {/* Main image */}
            <div
                className="
                relative row-span-2 col-span-3
                w-[549px] h-[728px]
                flex items-center justify-center"
            >
                <img
                    src={images[activeIndex]}
                    alt={`Product image ${activeIndex + 1}`}
                    className="w-full h-full object-cover"
                />

                <Badges variant="large" />

                <button
                    disabled={!hasPrev}
                    onClick={handlePrev}
                    className={`
                        absolute left-[33px] top-1/2 -translate-y-1/2
                        size-10
                        flex items-center justify-center
                        bg-white rounded-full
                        ${!hasPrev ? 'opacity-40 cursor-not-allowed' : ''}
                    `}
                >
                    <Icon
                        name='ArrowLeft'
                        spanClassName='size-6'
                        iconClassName='w-[14px] h-[9px] text-n7100 shadow-1'
                    />
                </button>

                <button
                    disabled={!hasNext}
                    onClick={handleNext}
                    className={`
                        absolute right-[33px] top-1/2 -translate-y-1/2
                        size-10
                        flex items-center justify-center
                        bg-white rounded-full
                        ${!hasNext ? 'opacity-40 cursor-not-allowed' : ''}
                    `}
                >
                    <Icon
                        name='ArrowRight'
                        spanClassName='size-6'
                        iconClassName={`
                        w-[14px] h-[9px] text-n7100 shadow-1
                        ${!hasNext ? 'text-n3100' : 'n7100'}
                    `}
                    />
                </button>
            </div>

            {/* Thumbnails */}
            <div className="hidden 2xl:flex gap-6">
                {visibleThumbnails.map((img, i) => {
                    const realIndex = thumbStart + i + 1;

                    return (
                        <button
                            key={img}
                            onClick={() => setActiveIndex(realIndex)}
                            className="w-[167px]"
                        >
                            <img
                                src={img}
                                alt={`Thumbnail ${realIndex + 1}`}
                                className="size-[167px] object-cover object-bottom"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default DesktopCarousel;
