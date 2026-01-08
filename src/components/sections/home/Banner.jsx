import { ShopMoreBtn } from '@ui';

const Banner = () => {
    return (
        <section
            className='
            w-full h-[734px] 2xl:h-[532px]
            flex flex-col
            '
        >
            <div
                className='
                relative
                w-full 2xl:w-1/2 h-1/2 2xl:h-full overflow-hidden'>
                <img
                    src="src/assets/images/banner image.png"
                    alt="banner image"
                    className='
                    absolute -bottom-[26px] 2xl:-bottom-[40px]
                    w-full h-[469px] 2xl:h-auto
                    object-fill 2xl:object-fill'
                />
            </div>

            <div
                className='
                w-full 2xl:w-1/2 h-1/2 2xl:h-full
                flex flex-col items-start justify-center gap-6'
            >
            </div>
        </section>
    );
}

export default Banner;