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
    console.log('isMobile: ', isMobile);
    console.log('canShowRecommendations: ', canShowRecommendations);
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

            <Section divider>
                {(!canShowRecommendations || isMobile) && (<ProductOfferCountdown />)}
            </Section>

            <Section>
                <ProductOptions />
            </Section>

            <Section className='mt-6 2xl:mt-8' divider={!canShowRecommendations || isMobile}>
                <ProductActions />
            </Section>

            <Section>
                <ProductMeta />
            </Section>

            {canShowRecommendations && (
                <Section >
                    <ProductTabs />
                </Section>
            )}

        </div>
    )
}

export default ProductInfo;
