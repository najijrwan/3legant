import { Icon } from '@ui';

const bannerItems = [
    {
        image: 'src/assets/images/product image 4.png',
        category: 'Living Room',
        containerHeight: 'h-[377px] 2xl:h-[664px]',
        imageHeight: '',
    },
    {
        image: 'src/assets/images/product image 5.png',
        category: 'Bedroom',
        containerHeight: 'h-[180px] 2xl:h-[320px]',
        imageHeight: 'h-[160px] 2xl:h-[360px] ',
    },
    {
        image: 'src/assets/images/product image 6.png',
        category: 'kitchen',
        containerHeight: 'h-[180px] 2xl:h-[320px]',
        imageHeight: 'h-[100px] 2xl:h-[320px]',
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
                    className={`
                    relative
                    ${item.containerHeight}
                    ${item.category === 'Living Room' ? 'row-span-2' : ''}
                    bg-n2100`}
                >
                    <img
                        src={item.image}
                        alt={`${item.category} image`}
                        className={`
                        absolute right-0 -top-[30px]
                        ${item.imageHeight} object-contain object-bottom`}
                    />
                </div>
            ))}
        </section>
    );
}

export default BannerGrid;