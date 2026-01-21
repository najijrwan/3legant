import DesktopGrid from './variants/DesktopGrid';
import DesktopCarousel from './variants/DesktopCarousel';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (isMobile) return <MobileCarousel />
    if (hasRecommendations) return <DesktopGrid images={images}/>
    return <DesktopCarousel images={images}/>
}

export default ProductMedia;