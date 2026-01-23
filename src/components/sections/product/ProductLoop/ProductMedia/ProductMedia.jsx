import DesktopGrid from './variants/DesktopGrid';
import ProductCarouselWithThumbs from './variants/ProductCarouselWithThumbs';
import MobileCarousel from './variants/MobileCarousel';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (isMobile) return <MobileCarousel images={images} />;
    if (hasRecommendations) return <DesktopGrid images={images} />;
    return <ProductCarouselWithThumbs images={images} />;
};

export default ProductMedia;
