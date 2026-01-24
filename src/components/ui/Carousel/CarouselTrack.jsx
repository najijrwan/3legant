import { Badges } from '@ui';

const CarouselTrack = ({ images, activeIndex, className = '' }) => {
    return (
        <div
            className={`
                relative
                flex items-center
                bg-n2100
                transition-transform duration-500 ease-out ${className}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                />
            ))}

            <Badges
                variant='large'
                containerClass='left-6 top-6 2xl:left-8 2xl:top-8'
            />
        </div>
    );
};

export default CarouselTrack;
