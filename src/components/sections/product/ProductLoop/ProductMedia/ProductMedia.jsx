import ProductDesktopGrid from './ProductDesktopGrid';
import { MediaCarousel } from '@ui';
import { useProduct } from '@product';

const ProductMedia = ({ images, isMobile }) => {
    const { canShowRecommendations } = useProduct();

    if (canShowRecommendations && !isMobile) return <ProductDesktopGrid images={images} />;

    return (
        <MediaCarousel
            images={images}
            variant='productImages'
            showBadges={true}
            showThumbs={!isMobile}
        />
    );
};

export default ProductMedia;

