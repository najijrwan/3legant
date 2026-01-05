import { Icon } from '@ui';

const bannerItems = [
    {
        image: 'src/assets/images/product image 4.png',
        category: 'Living Room',
    },
    {
        image: 'src/assets/images/product image 4.png',
        category: 'Bedroom',
    },
    {
        image: 'src/assets/images/product image 4.png',
        category: 'kitchen',
    },
]

const BannerGrid = () => {
    return (
        <section
            className="
            px-8 2xl:px-40
            grid grid-cols-1 2xl:grid-cols-2 2xl:grid-rows-2 grid-rows-4 gap-6"
        >
            <div
                className="
                w-[548px] h-[664px]
                row-span-2
                bg-n2100"
            >
                <img
                    src={bannerItems[0].image}
                    alt={`${bannerItems[0].category} image`}
                    className="w-full object-bottom"
                />
            </div>
        </section>
    );
}

export default BannerGrid;