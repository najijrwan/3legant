import { useProduct } from '@product';
import Section from './Section';
import ProductSummary from './ProductSummary';
import ProductOfferCountdown from './ProductOfferCountdown';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductMeta from './ProductMeta';
import ProductTabs from '../../ProductTabs/ProductTabs';
import { useBreakpoint } from '@hooks';

const ProductInfo = ({ }) => {
    const { canShowRecommendations } = useProduct();
    const { isMobile } = useBreakpoint();

    return (
        <div
            className={`
            @container 
            w-full max-w-[508px] pt-4 2xl:pt-0
            flex flex-col ${canShowRecommendations && !isMobile? 'gap-4' : 'gap-6'}`}
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

            <Section className={`pt-6 ${canShowRecommendations ? '2xl:pt-6 2xl:gap-6' : '2xl:pt-8 2xl:gap-8'}`} divider={!canShowRecommendations || isMobile}>
                <ProductActions />
            </Section>

            <Section className='pb-6'>
                <ProductMeta />
            </Section>

            {(canShowRecommendations && !isMobile) && (
                <Section className='py-2 h-[352px] overflow-y-auto'>
                    <ProductTabs />
                </Section>
            )}

        </div>
    )
}

export default ProductInfo;
