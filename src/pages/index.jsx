import { Layout } from '@layout';
import { HeroSlider, BannerGrid } from '@home';

const HomePage = () => {
    return (
        <Layout>
            <HeroSlider />
            <BannerGrid />
        </Layout>
    );
};

export default HomePage;