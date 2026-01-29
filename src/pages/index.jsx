import { HeroSlider, BannerGrid, Values, Banner, Blog } from '@home';
import { CarouselSection } from '@ui';
import { HOME_NEW_ARRIVALS } from '@data';

const HomePage = () => {
    return (
        <>
            <HeroSlider />
            <BannerGrid />
            <CarouselSection title={`New\nArrivals`} variant="default" items={HOME_NEW_ARRIVALS} />
            <Values />
            <Banner />
            <Blog title="Articles" />
        </>
    );
};

export default HomePage;