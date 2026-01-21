import { Badges } from '@ui';
import {
    ProductMedia,
    ProductBreadcrumbs,
    ProductSummary,
    OfferCountdown,
    ProductOptions,
    ProductActions,
    ProductMeta,
} from '@product';

const PRODUCT_IMAGES = [
    "src/assets/images/product image 1 black.png",
    "src/assets/images/product image 1.1.png",
    "src/assets/images/product image 1.2.png",
    "src/assets/images/product image 1.3.png",
    "src/assets/images/product image 1.4.png",
    "src/assets/images/product image 1.5.png",
]

const ProductLoop = () => {
    return (
        <section className="">
            <ProductBreadcrumbs />

            <div
                className='
                px-8 2xl:px-40
                flex flex-col 2xl:flex-row 2xl:justify-between'
            >
                <ProductMedia
                    images={PRODUCT_IMAGES}
                    hasRecommendations={true}
                />

                <div
                    className='
                    pt-4 2xl:pt-0
                    w-full max-w-[508px]
                    flex flex-col'
                >
                    <ProductSummary />

                    <OfferCountdown />

                    <ProductOptions />

                    <ProductActions />

                    <ProductMeta />
                </div>
            </div>
        </section>
    );
}

export default ProductLoop;