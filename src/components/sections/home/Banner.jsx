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
                    className='object-fill absolute -bottom-[26px] w-full h-[469px]'
                />
            </div>

            <div
                className='
                '
            >

            </div>
        </section>
    );
}

export default Banner;