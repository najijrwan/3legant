import ProductSummary from './ProductSummary';
import ProductOfferCountdown from './ProductOfferCountdown';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductMeta from './ProductMeta';
import ProductTabs from '../../ProductTabs/ProductTabs';

const ProductInfo = ({ hasRecommendation = true }) => {
    return (
        <div
            className='
            @container 
            w-full max-w-[508px] pt-4 2xl:pt-0
            flex flex-col'
        >
            <ProductSummary />

            {!hasRecommendation && (
                <ProductOfferCountdown />
            )}

            <ProductOptions />

            <ProductActions />

            <ProductMeta />

            {hasRecommendation && (
                <ProductTabs />
            )}
        </div>
    )
}

export default ProductInfo;
