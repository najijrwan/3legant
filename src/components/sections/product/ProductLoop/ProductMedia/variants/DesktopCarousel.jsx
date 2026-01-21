import { useState } from 'react';
import { Badges } from '@ui';

const DesktopCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


    return (
        <div className='grid grid-cols-3 grid-rows-3'>
            <div
                className='
                relative row-span-2 col-span-3
                max-w-[547px] h-[414px] 2xl:h-[728px] mb-4 2lx:mb-[67px]
                flex items-center
                bg-n2100'
            >
                <img
                    src={images[activeIndex]}
                    alt={`Product image ${activeIndex + 1}`}
                    className='size-[350px] 2xl:size-[650px] object-cover object-bottom'
                />

                <Badges variant='large' />

                {/* Left button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                >
                    &#8592;
                </button>

                {/* Right button */}
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                >
                    &#8594;
                </button>
            </div>

            {images.map((image, i) => (
                <div
                    key={i}
                    className={`size-[167px] cursor-pointer border-2 ${activeIndex === i ? 'border-n7100' : 'border-transparent'
                        }`}
                    onClick={() => setActiveIndex(i)}
                >
                    <img src={image} alt={`Thumbnail ${i + 1}`} className="size-full" />
                </div>
            ))}

        </div>
    )
}

export default DesktopCarousel;