import { ProductsCarousel, ProductsCarouselHeader } from '@ui';

const ProductCarouselSection = ({
    title,
    titleVariant,
    sectionVariant,
    intent,
    products,
}) => {

    const VARIANTS = {
        default: 'pl-8 py-8 2xl:pb-0 2xl:pt-12 2xl:pr-0 2xl:pl-40',
        alt: 'pl-8 pb-20 pt-8 2xl:pl-40 2xl:pt-10',
    };
    
    const navMode = intent === 'discovery' ? 'scrollbar' : 'dots';

    return (
        <section
            data-title={title}
            className={`
            relative
            w-full ${VARIANTS[sectionVariant]}
            flex flex-col gap-10 2xl:gap-12`}
        >
            <ProductsCarouselHeader
                title={title}
                titleVariant={titleVariant}
                intent={intent}
            />

            <ProductsCarousel
                products={products}
                navMode={navMode}
            />
        </section>
    );
};

export default ProductCarouselSection;
