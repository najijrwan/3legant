import ProductDesktopGrid from './ProductDesktopGrid';
import { MediaCarousel } from '@ui';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (hasRecommendations && !isMobile) return <ProductDesktopGrid images={images} />;

    return (
        <MediaCarousel
            images={images}
            showBadges={true}
            showThumbs={!isMobile}
        />
    );
};

export default ProductMedia;

