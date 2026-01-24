const CarouselTrack = ({ images, activeIndex, children, className = '' }) => {
    return (
        <div
            className={`
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
            {children}
        </div>
    );
};

export default CarouselTrack;
