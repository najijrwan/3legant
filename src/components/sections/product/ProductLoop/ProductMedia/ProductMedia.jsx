import DesktopGrid from './variants/DesktopGrid';
import DesktopCarousel from './variants/DesktopCarousel';
import MobileCarousel from './variants/MobileCarousel';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (isMobile) return <MobileCarousel images={images} />;
    if (hasRecommendations) return <DesktopGrid images={images} />;
    return <DesktopCarousel images={images} />;
};

export default ProductMedia;
