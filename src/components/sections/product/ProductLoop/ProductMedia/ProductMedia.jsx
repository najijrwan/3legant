import ProductCarouselBase from './variants/ProductCarouselBase';
import DesktopGrid from './variants/DesktopGrid';
import ProductCarouselWithThumbs from './variants/ProductCarouselWithThumbs';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (isMobile) return <ProductCarouselBase images={images} />;
    if (hasRecommendations) return <DesktopGrid images={images} />;
    return <ProductCarouselWithThumbs images={images} />;
};

export default ProductMedia;
