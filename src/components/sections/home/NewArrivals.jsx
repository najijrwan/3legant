import { useBreakpoint } from '@hooks';
import { ProductsCarouselSection } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';

const NewArrivals = () => {
    const { isMobile } = useBreakpoint();

    return (
        <ProductsCarouselSection
            title={`New\nArrivals`}
            titleVariant="default"
            sectionVariant="default"
            navMode="scrollbar"
            products={HOME_NEW_ARRIVALS}
            isMobile={isMobile}
        />
    );
}

export default NewArrivals;