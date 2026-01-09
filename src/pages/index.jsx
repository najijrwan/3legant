import { Layout } from '@layout';
import { HeroSlider, BannerGrid, NewArrivals, Values, Banner, Blog } from '@home';

const HomePage = () => {
    return (
        <Layout>
            <HeroSlider />
            <BannerGrid />
            <NewArrivals title="New Arrivals" />
            <Values />
            <Banner />
            <Blog title="Articles"/>
        </Layout>
    );
};

export default HomePage;