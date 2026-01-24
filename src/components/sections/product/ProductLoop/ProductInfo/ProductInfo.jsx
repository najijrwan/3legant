import ProductSummary from './ProductSummary';
import ProductOfferCountdown from './ProductOfferCountdown';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductMeta from './ProductMeta';

const ProductInfo = () => {
    return (
        <div
            className='
            pt-4 2xl:pt-0
            w-full max-w-[508px]
            flex flex-col'
        >
            <ProductSummary />

            <ProductOfferCountdown />

            <ProductOptions />

            <ProductActions />

            <ProductMeta />
        </div>
    )
}

export default ProductInfo;
