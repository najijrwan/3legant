import { useBreakpoint } from '@hooks';
import { HeroSlider, BannerGrid, Values, Banner, Blog } from '@home';
import { ProductsCarouselSection } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';


const HomePage = () => {
    const { isMobile } = useBreakpoint();

    return (
        <>
            <HeroSlider />

            <BannerGrid />

            <ProductsCarouselSection
                title={`New\nArrivals`}
                titleVariant="default"
                sectionVariant="default"
                intent="discovery"
                products={HOME_NEW_ARRIVALS}
                isMobile={isMobile}
            />

            <Values />

            <Banner />

            <Blog title="Articles" />
        </>
    );
};

export default HomePage;