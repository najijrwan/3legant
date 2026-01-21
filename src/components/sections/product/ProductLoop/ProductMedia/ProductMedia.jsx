import DesktopCarousel from './variants/DesktopCarousel';

const ProductMedia = ({ images, isMobile, hasRecommendations }) => {
    if (isMobile) return <MobileCarousel />
    if (hasRecommendations) return <DesktopGrid />
    return <DesktopCarousel images={images}/>
}

export default ProductMedia;