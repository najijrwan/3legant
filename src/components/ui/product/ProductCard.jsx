import { Icon } from '@ui';
import { Badges } from '@product';
import { formatPrice, finalPrice } from '@utils';

const ProductCard = ({ product, variant }) => {
    const { rating } = product;
    const discountPrice = product.price * (product.discountPercentage / 100);
    const newPrice = formatPrice(finalPrice(product.price, product.discountPercentage));

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
                    discountPercentage={product.discountPercentage} />
            </div>

            <div
                className='w-full flex flex-col gap-1'
            >
                <div className="flex gap-0.5">
                    {Array.from({ length: rating }).map((_, index) => (
                        <Icon
                            key={index}
                            name="StarFill"
                            spanClassName="size-4"
                        />
                    ))}
                </div>

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
                        {newPrice}
                    </span>

                    <span className='hidden text-n4100 caption-1 line-through group-hover:block'>
                        {formatPrice(product.price)}
                    </span>
                </p>
            </div>
        </li>
    );
}

export default ProductCard;