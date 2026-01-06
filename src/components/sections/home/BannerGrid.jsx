import { Icon } from '@ui';

const bannerItems = [
    {
        image: 'src/assets/images/product image 4.png',
        category: 'Living Room',
        containerHeight: 'h-[377px] 2xl:h-[664px]',
        imagePosition: 'static',
        imageHeight: 'size-full',
    },
    {
        image: 'src/assets/images/product image 5.png',
        category: 'Bedroom',
        containerHeight: 'h-[180px] 2xl:h-[320px]',
        imagePosition: 'absolute -right-[20px] 2xl:-right-[30px] 2xl:-top-[30px]',
        imageHeight: 'h-[180px] 2xl:h-[360px]',
    },
    {
        image: 'src/assets/images/product image 6.png',
        category: 'kitchen',
        containerHeight: 'h-[180px] 2xl:h-[320px]',
        imagePosition: 'absolute right-[10px] 2xl:right-[30px] top-[40px] 2xl:top-[60px]',
        imageHeight: 'h-[120px] 2xl:h-[220px]',
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
                        ${item.imagePosition}
                        ${item.imageHeight} object-contain object-bottom`}
                    />
                    <div
                        className={`
                        ${item.category === 'Living Room' ? '2xl:left-12 top-8 2xl:top-12' : ''}
                        absolute left-8 bottom-8 2xl:bottom-10
                        flex flex-col gap-2
                        text-n7100`}
                    >
                        <h6 className='2xl:h5'>{item.category}</h6>
                        <button
                            className="
                            flex items-center gap-1
                            btn-xs 2xl:btns"
                        >
                            <span>Shop Now</span>
                            <Icon name="ArrowRight" size='16px' className='w-2.5 h-2'/>
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default BannerGrid;