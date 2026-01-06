import { Icon } from '@ui';

const bannerItems = [
    {
        image: 'src/assets/images/product image 4.png',
        category: 'Living Room',
        height: 'h-[377px]'
    },
    {
        image: 'src/assets/images/product image 5.png',
        category: 'Bedroom',
        height: 'h-[160px]'
    },
    {
        image: 'src/assets/images/product image 6.png',
        category: 'kitchen',
        height: 'h-[100px]'
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
            {bannerItems.map((item, i) => (
                <div
                    key={i}
                    className={`${item.category === 'Living Room' ? 'row-span-2' : ''} bg-n2100`}
                >
                    <img
                        src={item.image}
                        alt={`${item.category} image`}
                        className={`${item.height} object-contain object-bottom`}
                    />
                </div>
            ))}
        </section>
    );
}

export default BannerGrid;