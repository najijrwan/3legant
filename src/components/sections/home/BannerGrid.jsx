import { Icon } from '@ui';

const bannerItems = [
    {
        image: 'src/assets/images/product image 4.png',
        category: 'Living Room',
    },
    {
        image: 'src/assets/images/product image 5.png',
        category: 'Bedroom',
    },
    {
        image: 'src/assets/images/product image 6.png',
        category: 'kitchen',
    },
]

const BannerGrid = () => {
    return (
        <section
            className="
            w-full
            px-8 2xl:px-40
            grid grid-cols-1 2xl:grid-cols-2 grid-rows-4 2xl:grid-rows-2 gap-4 2xl:gap-6"
        >
            <div
                className="
                row-span-2
                bg-n2100"
            >
                <img
                    src={bannerItems[0].image}
                    alt={`${bannerItems[0].category} image`}
                    className="h-[377px] object-contain object-bottom"
                />
            </div>
            <div
                className="
                bg-n2100"
            >
                <img
                    src={bannerItems[1].image}
                    alt={`${bannerItems[1].category} image`}
                    className="h-[160px] object-contain object-bottom"
                />
            </div>
            <div
                className="
                
                bg-n2100"
            >
                <img
                    src={bannerItems[2].image}
                    alt={`${bannerItems[2].category} image`}
                    className="h-[100px] object-contain object-bottom"
                />
            </div>
        </section>
    );
}

export default BannerGrid;