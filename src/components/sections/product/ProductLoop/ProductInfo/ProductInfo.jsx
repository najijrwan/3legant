import Section from './Section';
import ProductSummary from './ProductSummary';
import ProductOfferCountdown from './ProductOfferCountdown';
import ProductOptions from './ProductOptions';
import ProductActions from './ProductActions';
import ProductMeta from './ProductMeta';
import ProductTabs from '../../ProductTabs/ProductTabs';

const ProductInfo = ({ layout }) => {
    const divider = !layout.showRecommendations || layout.isMobile;
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
                ${divider ? 'pt-6 gap-6 2xl:pt-8 gap-8' : 'py-6'}`}
                divider={divider}>
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
