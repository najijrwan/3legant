import { useProduct } from '@product';
import Section from './Section';
import ProductSummary from './ProductSummary';
import ProductOfferCountdown from './ProductOfferCountdown';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductMeta from './ProductMeta';
import ProductTabs from '../../ProductTabs/ProductTabs';

const ProductInfo = ({ isMobile = true }) => {
    const { canShowRecommendations } = useProduct();
    return (
        <div
            className='
            @container 
            w-full max-w-[508px] pt-4 2xl:pt-0
            flex flex-col gap-6 2xl:gap-8'
        >
            <Section divider>
                <ProductSummary />
            </Section>

            <Section>
                {!canShowRecommendations || isMobile && (<ProductOfferCountdown />)}
            </Section>

            <Section>
                <ProductOptions />
            </Section>

            <Section>
                <ProductActions padded divider={!canShowRecommendations} />
            </Section>

            <Section>
                <ProductMeta />
            </Section>

            <Section>
                {canShowRecommendations && (<ProductTabs />)}
            </Section>
        </div>
    )
}

export default ProductInfo;
