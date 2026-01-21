import DesktopCarousel from './variants/DesktopCarousel';

const ProductMedia = ({ images, hasRecommendations }) => {
    return (
        <div className='grid grid-cols-3 grid-rows-3'>
            <DesktopCarousel images={images}/>
        </div>
    )
}

export default ProductMedia;