import { HeroSlider, BannerGrid, NewArrivals, Values, Banner, Blog } from '@home';
import NewArrivals from '../components/sections/home/NewArrivals';

const HomePage = () => {
    return (
        <>
            <HeroSlider />

            <BannerGrid />

            <NewArrivals />

            <Values />

            <Banner />

            <Blog title="Articles" />
        </>
    );
};

export default HomePage;