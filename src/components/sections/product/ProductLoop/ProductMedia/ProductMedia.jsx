import ProductCarouselBase from './ProductCarouselBase';
import DesktopGrid from './DesktopGrid';
import ProductCarouselWithThumbs from './ProductCarouselWithThumbs';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (isMobile) return <ProductCarouselBase images={images} />;
    if (hasRecommendations) return <DesktopGrid images={images} />;
    return <ProductCarouselWithThumbs images={images} />;
};

export default ProductMedia;
