import { useCarousel } from '@/hooks';
import { Icon, Badges } from '@ui';
import ProductCarouselBase from './ProductCarouselBase';

const THUMB_COUNT = 3;

const ProductCarouselWithThumbs = ({ images = [] }) => {
    const {
        activeIndex,
        visibleThumbnails,
        hasPrev,
        hasNext,
        handleNext,
        handlePrev,
        setActiveIndex,
    } = useCarousel(images, THUMB_COUNT);

    return (
        <div className="flex flex-col gap-6">
            {/* Main image */}
            <div
                className="
                relative row-span-2 col-span-3
                w-[549px] h-[728px]
                flex items-center justify-center"
            >
                <ProductCarouselBase
                    images={images}
                    activeIndex={activeIndex}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    enableSwipe={false}
                />
            </div>

            {/* Thumbnails */}
            <div className="hidden 2xl:flex gap-6">
                {visibleThumbnails.map((img, i) => {
                    const realIndex = i + activeIndex + 1 > images.length - 1 ? images.length - 1 : i + activeIndex + 1;
                    return (
                        <div key={img} className="w-[167px]">
                            <img
                                src={img}
                                alt={`Thumbnail ${realIndex + 1}`}
                                className="size-[167px] object-cover object-bottom" />
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export default ProductCarouselWithThumbs;
