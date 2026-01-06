import { Layout } from '@layout';
import { HeroSlider, BannerGrid, NewArrivals } from '@home';

const HomePage = () => {
    return (
        <Layout>
            <HeroSlider />
            <BannerGrid />
            <NewArrivals title="New Arrivals" />
        </Layout>
    );
};

export default HomePage;