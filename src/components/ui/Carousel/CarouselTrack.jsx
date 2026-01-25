const CarouselTrack = ({ images, activeIndex, variant, className = '' }) => {
    const VARIANTS = {
        heroImages: 'w-full h-[304px] 2xl:h-[536px]',
        productImages: 'w-[311px] 2xl:w-[549px] h-[414px] 2xl:h-[728px] mb-4 2xl:mb-6',
    }
    const SIZE = VARIANTS[variant];
    return (
        <div
            className={`
            relative
            ${SIZE}
            flex items-center
            bg-n2100 2xl:bg-white
            transition-transform duration-500 ease-out ${className}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className={`
                    w-full ${i === 0 && variant === 'productImages' ? 'h-[350px] 2xl:h-[660px]' : 'h-full'}
                    object-cover object-bottom shrink-0`}
                />
            ))}
        </div>
    );
};

export default CarouselTrack;
