const CarouselThumbs = ({ thumbnails = [], activeIndex, onClick, className = '' }) => {
  return (
    <div className={`flex gap-2 mt-4 ${className}`}>
      {thumbnails.map((img, i) => {
        const thumbIndex = i + 1; // assuming first big image is at index 0
        return (
          <button
            key={img}
            onClick={() => onClick(thumbIndex)}
            className={`w-[167px] border-2 ${activeIndex === thumbIndex ? 'border-n7100' : 'border-transparent'}`}
          >
            <img
              src={img}
              alt={`Thumbnail ${thumbIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        );
      })}
    </div>
  );
};

export default CarouselThumbs;
