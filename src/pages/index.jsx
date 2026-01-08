import { Layout } from '@layout';
import { HeroSlider, BannerGrid, NewArrivals, Values, Banner } from '@home';

const HomePage = () => {
    return (
        <Layout>
            <HeroSlider />
            <BannerGrid />
            <NewArrivals title="New Arrivals" />
            <Values />
            <Banner />
        </Layout>
    );
};

export default HomePage;