const CarouselTrack = ({ images, activeIndex, className = '' }) => {
    return (
        <div
            className={`
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
                    className="w-full h-full object-cover object-bottom shrink-0"
                />
            ))}
        </div>
    );
};

export default CarouselTrack;
