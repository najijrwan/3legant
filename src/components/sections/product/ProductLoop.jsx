import { Icon, Badges, ProductRating } from '@ui';
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
                        <Icon name='ChevronRight' spanClassName='size-3' />
                    </li>
                    <li className='flex items-center gap-1'>
                        <span>Shop</span>
                        <Icon name='ChevronRight' spanClassName='size-3' />
                    </li>
                    <li className='flex items-center gap-1'>
                        <span>Living Room</span>
                        <Icon name='ChevronRight' spanClassName='size-3' />
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

            <div className='px-8 pt-4'>
                <div className='flex flex-col'>
                    <div className='pb-6 flex flex-col gap-4'>
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

                    <div className='py-6 flex flex-col gap-3'>
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

                    <div></div>
                </div>

                <div></div>

                <div></div>
            </div>
        </section>
    );
}

export default ProductLoop;