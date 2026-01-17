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

const productColors = [
    "src/assets/images/product image 1 black.png",
    "src/assets/images/product image 1 brown.png",
    "src/assets/images/product image 1 red.png",
    "src/assets/images/product image 1 white.png",
]

const ProductLoop = () => {
    const price = formatPrice(finalPrice(400, 50));
    return (
        <section
            className=""
        >
            <div
                className='
                px-8 py-4
                flex flex-col gap-4'
            >
                <ul
                    className="
                w-fit 2xl:pl-40
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
                relative
                w-full h-[414px]
                flex items-center
                bg-n2100'
                >
                    <img
                        src="src/assets/images/product image 1.png"
                        alt=""
                        className='size-[350px] object-cover object-bottom'
                    />

                    <Badges variant='large' />
                </div>
            </div>

            <div
                className='
                px-8 pt-4
                flex flex-col gap-6'
            >
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2.5'>
                        <ProductRating rating={5} />
                        <span className='text-n7100 caption-2'>11 Reviews</span>
                    </div>

                    <h4>Tray Table</h4>

                    <p className='w-[311px] text-n4100 body-2'>
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
                            <div className='flex flex-col items-center'>
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

                        <div className='w-[311px] flex justify-between'>
                            {productColors.map((colors, i) => (
                                <img
                                    key={i}
                                    src={colors}
                                    alt=""
                                    className="h-[72px]"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='pt-6 flex gap-2'>
                    <div className='flex gap-2'>
                        <div className='px-2 py-3 bg-black100'>
                            <div className='flex items-center gap-[13px]'>
                                <Icon
                                    name="Minus"
                                    spanClassName='size-4'
                                    iconClassName='w-[9.33px] text-black900'
                                />
                                <span className='text-black900 text-[12px] leading-5 font-inter font-semibold'>
                                    1
                                </span>
                                <Icon
                                    name="Add"
                                    spanClassName='size-4'
                                    iconClassName='w-[9.33px] text-black900'
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        className='
                        w-full px-10 py-1
                        flex items-center justify-center gap-2
                        rounded-sm border border-n7100'
                    >
                        <Icon
                            name='Heart'
                            spanClassName='size-4'
                            iconClassName='w-[14.67px] h-[11.68] text-n7100'
                        />
                        <span className='text-n7100 btn-xs'>Wishlist</span>
                    </button>
                </div>

                <AddToCartBtn
                    className='
                    px-10 py-1
                    text-white btn-xs'
                />
            </div>
        </section>
    );
}

export default ProductLoop;