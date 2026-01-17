import { Icon, Badges, AddToCartBtn, ProductRating } from '@ui';
import { formatPrice, finalPrice } from '@utils';

const ProductCard = ({ product, variant }) => {
    const { rating } = product;
    const price = formatPrice(finalPrice(product.price, product.discountPercentage));

    return (
        <li
            className="
            h-full
            flex flex-col gap-3
            group cursor-pointer"
        >
            <div
                className="
                    relative
                    w-[231px] 2xl:w-[262px] h-[306px] 2xl:h-[349px]
                    bg-n2100"
            >
                <img
                    src={product.image}
                    alt={`${product.image} image`}
                    className="size-full object-contain"
                />

                <Badges
                    variant={variant}
                    discountPercentage={product.discountPercentage}
                />

                <button
                    className={`
                    absolute top-4 ${variant === 'medium' ? 'right-4' : 'right-3 2xl:right-4'} 2xl:-translate-y-1/2
                    size-8 rounded-full
                    flex items-center justify-center
                    bg-white opacity-100 2xl:opacity-0
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 ease-out`}
                >
                    <Icon
                        name='Heart'
                        spanClassName='size-5'
                        iconClassName='w-[19px] h-[15px] text-n4100'
                    />
                </button>

                <AddToCartBtn
                    className='
                    absolute right-1/2 translate-x-1/2 bottom-3.5 2xl:bottom-4 2xl:translate-y-1/2
                    w-[203px] 2xl:w-[230px] px-6 py-2
                    text-n1100 btn-s
                    opacity-100 2xl:opacity-0
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-400 east-out'
                />
            </div>

            <div
                className='w-full flex flex-col gap-1'
            >
                <ProductRating rating={rating} />

                <p
                    className='
                    w-full
                    text-n7100 body-2-semi'
                >
                    {product.label}
                </p>

                <p
                    className='w-fit flex items-center gap-3'
                >
                    <span className='text-n7100 caption-1-semi'>
                        {price}
                    </span>

                    <span
                        className=' 
                        text-n4100 caption-1 line-through
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300 ease-out'
                    >
                        {formatPrice(product.price)}
                    </span>
                </p>
            </div>
        </li>
    );
}

export default ProductCard;