import { ProductMedia, ProductInfo, } from '@product';
import { useBreakpoint } from '@hooks';

const PRODUCT_IMAGES = [
    "src/assets/images/product image 1 black.png",
    "src/assets/images/product image 1.1.png",
    "src/assets/images/product image 1.2.png",
    "src/assets/images/product image 1.3.png",
    "src/assets/images/product image 1.4.png",
    "src/assets/images/product image 1.5.png",
]

const ProductLoop = () => {
    const { isMobile } = useBreakpoint();
    return (
        <section
            className="
                px-8 2xl:px-40
                flex flex-col 2xl:flex-row 2xl:justify-between"
        >

            <ProductMedia
                images={PRODUCT_IMAGES}
                isMobile={isMobile}
                hasRecommendations={true}
            />

            <ProductInfo isMobile={isMobile} />
        </section>
    );
}

export default ProductLoop;