const CarouselThumbs = ({ thumbnails = [], activeIndex, onClick, className = '' }) => {
  return (
    <div className={`flex gap-6 ${className}`}>
      {thumbnails.map((img, i) => { //TODO: from here
        const thumbIndex = i + 1; // assuming first big image is at index 0
        return (
          <div
            key={img}
            onClick={() => onClick(thumbIndex)}
            className='size-[167px]'
          >
            <img
              src={img}
              alt={`Thumbnail ${thumbIndex + 1}`}
              className="size-full object-cover object-bottom"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CarouselThumbs;
