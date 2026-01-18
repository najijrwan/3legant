import { Icon, Badges, ProductRating, AddToCartBtn } from '@ui';
import { formatPrice, finalPrice } from '@utils';

const timerBlocks = [
    {
        number: '02',
        in: 'Days',
    },
    {
        number: '12',
        in: 'Hours',
    },
    {
        number: '45',
        in: 'Minutes',
    },
    {
        number: '05',
        in: 'Seconds',
    },
]

const PRODUCT_COLORS = [
    "src/assets/images/product image 1 black.png",
    "src/assets/images/product image 1 brown.png",
    "src/assets/images/product image 1 red.png",
    "src/assets/images/product image 1 white.png",
]

const PRODUCT_OTHER_IMAGES = [
    "src/assets/images/product image 1.1.png",
    "src/assets/images/product image 1.2.png",
    "src/assets/images/product image 1.3.png",
]

const ProductLoop = () => {
    const price = formatPrice(finalPrice(400, 50));
    return (
        <section className="">
            <ul
                className="
                w-fit my-4 ml-8 2xl:ml-40
                flex gap-2 2xl:gap-4
                text-black600 caption-1 font-medium 2xl:btn-xs"
            >
                <li className='flex items-center gap-1'>
                    <span>Home</span>
                    <Icon name='ChevronRight' spanClassName='size-3' iconClassName='w-[8px] h-[9px]' />
                </li>
                <li className='flex items-center gap-1'>
                    <span>Shop</span>
                    <Icon name='ChevronRight' spanClassName='size-3' iconClassName='w-[8px] h-[9px]' />
                </li>
                <li className='flex items-center gap-1'>
                    <span>Living Room</span>
                    <Icon name='ChevronRight' spanClassName='size-3' iconClassName='w-[8px] h-[9px]' />
                </li>
                <li className='text-black900'>Product</li>
            </ul>

            <div
                className='
                px-8 2xl:pl-40
                flex flex-col 2xl:flex-row gap-4 2xl:gap-[63px]'
            >
                <div>
                    <div
                        className='
                    relative
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

                    <div

                        className='hidden 2xl:flex gap-6'
                    >
                        {PRODUCT_OTHER_IMAGES.map((images, i) => (

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
                    </div>

                </div>

                <div
                    className='
                    w-full max-w-[508px]
                    flex flex-col gap-6'
                >
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2.5'>
                            <ProductRating rating={5} />
                            <span className='text-n7100 caption-2'>11 Reviews</span>
                        </div>

                        <h4>Tray Table</h4>

                        <p className='text-n4100 body-2'>
                            Buy one or buy a few and make every space where you sit more convenient.
                            Light and easy to move around with removable tray top, handy for serving snacks.
                        </p>

                        <div className='flex items-center gap-3'>
                            <h6 className='text-black900'>{price}</h6>
                            <p className='h7 text-n4100 line-through'>{formatPrice(400)}</p>
                        </div>
                    </div>

                    <div className='w-full h-px bg-n3100'></div>

                    <div className='flex flex-col gap-3'>
                        <p className='text-n5100 body-2'>Offer expires in:</p>

                        <div className='flex gap-4'>
                            {timerBlocks.map((block, i) => (
                                <div
                                    key={i}
                                    className='flex flex-col items-center'>
                                    <h5 className='size-15 flex items-center justify-center bg-n2100'>
                                        {block.number}
                                    </h5>
                                    <p className='text-n4100 caption-2'>
                                        {block.in}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full h-px bg-n3100'></div>

                    <div className='flex flex-col gap-2'>
                        <p className='text-n4100 body-2-semi'>Measurements</p>
                        <p className='text-black body-1'>17 1/2x20 5/8 "</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-1 text-n4100'>
                                <p className='body-2-semi'>Choose Color</p>
                                <Icon
                                    name="ChevronRight"
                                    spanClassName='size-6'
                                    iconClassName='w-[7px] h-[15px]'
                                />
                            </div>

                            <p className='text-black body-1'>Black</p>
                        </div>

                        <div className='w-full max-w-[334px] flex justify-between'>
                            {PRODUCT_COLORS.map((colors, i) => (
                                <img
                                    key={i}
                                    src={colors}
                                    alt=""
                                    className="h-[72px]"
                                />
                            ))}
                        </div>
                    </div>

                    <div className='pt-6 flex flex-col gap-4'>

                        <div className='flex items-center gap-2 2xl:gap-6'>
                            <div className='px-2 2xl:px-4 py-3 2xl:py-3 bg-black100'>
                                <div className='h-7 flex items-center gap-6 box-content'>
                                    <Icon
                                        name="Minus"
                                        spanClassName='size-4 2xl:size-5'
                                        iconClassName='w-[10px] 2xl:w-[12px] text-black900'
                                    />
                                    <span 
                                        className='
                                        text-black900 text-[12px] 2xl:text-[16px] leading-5 leading-6.5 font-inter font-semibold'>
                                        1
                                    </span>
                                    <Icon
                                        name="Add"
                                        spanClassName='size-4 2xl:size-5'
                                        iconClassName='w-[10px] 2xl:w-[13px] 2xl:h-[13px] text-black900'
                                    />
                                </div>
                            </div>

                            <button
                                className='
                                w-full px-10 py-1 2xl:py-2.5
                                flex items-center justify-center gap-2
                                rounded-sm 2xl:rounded-lg border border-n7100'
                            >
                                <Icon
                                    name='Heart'
                                    spanClassName='size-4 2xl:size-6'
                                    iconClassName='w-[15px] h-[12px] 2xl:w-[24px] 2xl:h-[18px] text-n7100'
                                />
                                <span className='text-n7100 btn-xs 2xl:btn-m'>Wishlist</span>
                            </button>
                        </div>

                        <AddToCartBtn
                            className='
                            px-10 py-1 2xl:py-2.5
                            text-white btn-xs 2xl:btn-m rounded-sm 2xl:rounded-lg'
                        />
                    </div>

                    <div className='w-full h-px bg-n3100'></div>

                    <div
                        className='
                        w-full pb-6
                        flex flex-col gap-2'
                    >
                        <p className='flex gap-[98px]'>
                            <span className='text-n4100 caption-2'>SKU</span>
                            <span className='text-n7100 caption-2'>1117</span>
                        </p>

                        <div className='flex gap-[58px]'>
                            <p className='text-n4100 caption-2'>Category</p>
                            <p className='text-n7100 caption-2'>Living Room, Bedroom</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductLoop;