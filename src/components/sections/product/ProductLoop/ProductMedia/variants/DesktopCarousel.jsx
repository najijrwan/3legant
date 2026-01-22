import { useState } from 'react';
import { Badges } from '@ui';

const DesktopCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbStart, setThumbStart] = useState(0); // first visible thumbnail
    const THUMB_COUNT = 3; // how many thumbnails are visible at once

    const handlePrev = () => {
        if (activeIndex === 0) return; // disabled
        const newIndex = activeIndex - 1;
        setActiveIndex(newIndex);

        // shift thumbnail window if needed
        if (newIndex < thumbStart) {
            setThumbStart(newIndex);
        }
    };

    const handleNext = () => {
        if (activeIndex === images.length - 1) return; // disabled
        const newIndex = activeIndex + 1;
        setActiveIndex(newIndex);

        // shift thumbnail window if needed
        if (newIndex >= thumbStart + THUMB_COUNT) {
            setThumbStart(newIndex - THUMB_COUNT + 1);
        }
    };

    return (
        <div className='flex flex-col'>
            {/* Main Image */}
            <div
                className='
                relative row-span-2 col-span-3
                max-w-[549px] h-[414px] 2xl:h-[728px] mb-4 2lx:mb-[67px]
                flex items-center'
            >
                <img
                    src={images[activeIndex]}
                    alt={`Product image ${activeIndex + 1}`}
                    className='size-full object-cover object-bottom'
                />

                <Badges variant='large' />

                {/* Left button */}
                <button
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10
                        ${activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}
                    `}
                >
                    &#8592;
                </button>

                {/* Right button */}
                <button
                    onClick={handleNext}
                    disabled={activeIndex === images.length - 1}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10
                        ${activeIndex === images.length - 1 ? 'opacity-40 cursor-not-allowed' : ''}
                    `}
                >
                    &#8594;
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4">
                {images.slice(thumbStart, thumbStart + THUMB_COUNT).map((img, i) => {
                    const imgIndex = thumbStart + i; // actual index in images
                    return (
                        <div
                            key={imgIndex}
                            className={`size-[167px] cursor-pointer border-2 ${activeIndex === imgIndex ? 'border-n7100' : 'border-transparent'}`}
                            onClick={() => setActiveIndex(imgIndex)}
                        >
                            <img src={img} alt={`Thumbnail ${imgIndex + 1}`} className="w-full h-full" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DesktopCarousel;
