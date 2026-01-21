import { Badges } from '@ui';

const DesktopCarousel = ({images}) => {
    return (
        <>
            <div
                className='
                relative row-span-2 col-span-3
                max-w-[547px] h-[414px] 2xl:h-[728px] mb-4 2lx:mb-[67px]
                flex items-center
                bg-n2100'
            >
                <img
                    src="src/assets/images/product image 1 black.png"
                    alt=""
                    className='size-[350px] 2xl:size-[650px] object-cover object-bottom'
                />

                <Badges variant='large' />
            </div>

            {images.map((images, i) => (
                <div
                    key={i}
                    className='size-[167px]'
                >
                    <img
                        src={images}
                        alt=""
                        className="size-full" />
                </div>
            ))}
        </>
    )
}

export default DesktopCarousel;