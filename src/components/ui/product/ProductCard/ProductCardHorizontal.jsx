import { Icon, ProductRating } from '@ui';

const ProductCardHorizontal = ({ product }) => {
    const price = formatPrice(finalPrice(product.price, product.discountPercentage));
    return (
        <>
            <div className="relative bg-n2100 h-[416px] 2xl:h-[349px]">
                <img
                    src={product.image}
                    alt=""
                    className="size-full object-contain"
                />

                <Badges
                    variant='medium'
                    discountPercentage={product.discountPercentage}
                    containerClass='left-4 top-4'
                />
            </div>

            <div className="p-0 2xl:p-6 flex flex-col gap-4 2xl:gap-6">
                <div className='flex flex-col gap-2 2xl:gap-4'>
                    <ProductRating rating={product.rating} />

                    <div className="flex flex-col gap-1">
                        <div className="w-full flex items-center gap-1">
                            <p className="text-n7100 body-2-semi">
                                {product.label}
                            </p>

                            <button className="2xl:hidden p-1.5">
                                <Icon
                                    name='Heart'
                                    iconClassName='w-[19px] h-[15px] text-n4100'

                                />
                            </button>
                        </div>

                        <p className='flex items-center gap-3'>
                            <span className='text-n7100 caption-1-semi'>
                                {price}
                            </span>

                            <span className=' 
                                text-n4100 caption-1 line-through
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity duration-300 ease-out'
                            >
                                {formatPrice(product.price)}
                            </span>
                        </p>
                        {/* TODO: continue from here */}
                    </div>
                </div>
            </div >
        </>
    )
}