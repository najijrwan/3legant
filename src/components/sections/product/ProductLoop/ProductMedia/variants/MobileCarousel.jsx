import { useCarousel } from '@hooks';
import ProductCarouselBase from './ProductCarouselBase';

const MobileCarousel = ({ images }) => {
    const carousel = useCarousel(images);

    return (
        <ProductCarouselBase
            images={images}
            {...carousel}
            enableSwipe
            containerClass="w-[311px] h-[414px]"
            badgesPosition="left-6 top-6"
        />
    );
};

export default MobileCarousel;