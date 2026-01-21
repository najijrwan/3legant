import { Badges } from '@ui';

const DesktopCarousel = ({ images }) => {
    return (
        <div className='grid grid-cols-3 grid-rows-3'>
            <div
                className='
                relative row-span-2 col-span-3
                max-w-[547px] h-[414px] 2xl:h-[728px] mb-4 2lx:mb-[67px]
                flex items-center
                bg-n2100'
            >
                <img
                    src={images[0]}
                    alt=""
                    className='size-[350px] 2xl:size-[650px] object-cover object-bottom'
                />

                <Badges variant='large' />
            </div>

            {images.map((image, i) => (
                <div
                    key={i}
                    className='size-[167px]'
                >
                    <img
                        src={image}
                        alt=""
                        className="size-full" />
                </div>
            ))}
        </div>
    )
}

export default DesktopCarousel;