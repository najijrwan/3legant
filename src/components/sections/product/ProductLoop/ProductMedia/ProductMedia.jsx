import ProductCarouselBase from './ProductCarouselBase';
import ProductDesktopGrid from './ProductDesktopGrid';
import ProductCarouselWithThumbs from './ProductCarouselWithThumbs';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (isMobile) return <ProductCarouselBase images={images} />;
    if (hasRecommendations) return <ProductDesktopGrid images={images} />;
    return <ProductCarouselWithThumbs images={images} />;
};

export default ProductMedia;
