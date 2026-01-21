import { Icon, Badges, AddToCartBtn } from '@ui';
import { ProductBreadcrumbs, ProductSummary } from '@product';

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
    return (
        <section className="">
            <ProductBreadcrumbs />

            <div
                className='
                px-8 2xl:px-40
                flex flex-col 2xl:flex-row 2xl:justify-between'
            >
                <div className=''>
                    <div className='grid grid-cols-3 grid-rows-3'>
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
                    pt-4 2xl:pt-0
                    w-full max-w-[508px]
                    flex flex-col'
                >
                    <ProductSummary />

                    <div className='py-6 flex flex-col gap-3 border-b border-b-n3100'>
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

                    <div className='py-6 flex flex-col gap-6'>
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
                    </div>

                    <div className='py-6 2xl:py-8 flex flex-col gap-4 border-b border-b-n3100'>
                        <div className='flex items-center gap-2 2xl:gap-6'>
                            <div className='h-8 2xl:h-auto px-2 2xl:px-4 2xl:py-3 flex items-center bg-black100'>
                                <div className='2xl:h-7 flex items-center gap-[13px] 2xl:gap-6'>
                                    <Icon
                                        name="Minus"
                                        spanClassName='size-4 2xl:size-5'
                                        iconClassName='w-[10px] 2xl:w-[12px] text-black900'
                                    />
                                    <span
                                        className='
                                        text-black900 text-[12px] 2xl:text-[16px] leading-5 2xl:leading-6.5 font-inter font-semibold'>
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

                    <div
                        className='
                        py-6
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