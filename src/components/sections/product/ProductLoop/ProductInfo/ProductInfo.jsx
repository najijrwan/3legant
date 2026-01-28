import Section from './Section';
import ProductSummary from './ProductSummary';
import ProductOfferCountdown from './ProductOfferCountdown';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductMeta from './ProductMeta';
import ProductTabs from '../../ProductTabs/ProductTabs';

const ProductInfo = ({ layout }) => {

    return (
        <div
            className={`
            @container 
            w-full max-w-[508px] pt-4 2xl:pt-0
            flex flex-col ${layout.showTabsInline ? 'gap-4' : 'gap-6'}`}
        >
            <Section divider>
                <ProductSummary />
            </Section>

            {(layout.showOfferCountdown) && (
                <Section divider>
                    <ProductOfferCountdown />
                </Section>
            )}

            <Section>
                <ProductOptions />
            </Section>

            <Section
                className={`
                pt-6 
                ${layout.showRecommendations ? '2xl:pt-6 2xl:gap-6' : '2xl:pt-8 2xl:gap-8'}`}
                divider={layout.showRecommendations || layout.isMobile}>
                <ProductActions />
            </Section>

            <Section>
                <ProductMeta />
            </Section>

            {(layout.showRecommendations || layout.isMobile) && (
                <Section className={`w-full pb-20 @2xl:py-2 @2xl:h-[352px] @2xl:overflow-y-auto`}>
                    <ProductTabs variant='inline' layout={layout} />
                </Section>
            )}

        </div>
    )
}

export default ProductInfo;
