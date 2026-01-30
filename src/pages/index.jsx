import { HeroSlider, BannerGrid, Values, Banner, Blog } from '@home';
import { ProductsCarouselSection } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';

const HomePage = () => {
    return (
        <>
            <HeroSlider />

            <BannerGrid />

            <ProductsCarouselSection
                title={`New\nArrivals`}
                titleVariant="alt"
                sectionVariant="alt"
                intent="discovery"
                products={HOME_NEW_ARRIVALS}
            />

            <Values />

            <Banner />

            <Blog title="Articles" />
        </>
    );
};

export default HomePage;