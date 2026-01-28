import ProductDesktopGrid from './ProductDesktopGrid';
import { MediaCarousel } from '@ui';
import { useProduct } from '@product';
import { useBreakpoint } from '@hooks';

const PRODUCT_IMAGES = [
    "src/assets/images/product image 1 black.png",
    "src/assets/images/product image 1.1.png",
    "src/assets/images/product image 1.2.png",
    "src/assets/images/product image 1.3.png",
    "src/assets/images/product image 1.4.png",
    "src/assets/images/product image 1.5.png",
]

const ProductMedia = () => {
    const { canShowRecommendations } = useProduct();
    const { isMobile } = useBreakpoint();

    if (canShowRecommendations && !isMobile)
        return <ProductDesktopGrid images={PRODUCT_IMAGES} />;

    return (
        <MediaCarousel
            images={PRODUCT_IMAGES}
            variant='productImages'
            showBadges={true}
            showThumbs={!isMobile}
        />
    );
};

export default ProductMedia;

