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
            flex flex-col gap-6'
        >
            <Section divider>
                <ProductSummary />
            </Section>

            {(!canShowRecommendations || isMobile) && (
                <Section divider>
                    <ProductOfferCountdown />
                </Section>
            )}

            <Section>
                <ProductOptions />
            </Section>

            <Section className='mt-6 2xl:mt-8' divider={!canShowRecommendations || isMobile}>
                <ProductActions />
            </Section>

            <Section className='mb-6'>
                <ProductMeta />
            </Section>

            {canShowRecommendations && (
                <Section className='h-[349px] overflow-y-auto'>
                    <ProductTabs />
                </Section>
            )}

        </div>
    )
}

export default ProductInfo;
