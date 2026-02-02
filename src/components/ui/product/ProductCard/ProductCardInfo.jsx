import { ProductRating } from '@ui';
import { formatPrice, finalPrice } from '@utils';

const ProductCardInfo = ({ product }) => {
    const price = formatPrice(finalPrice(product.price, product.discountPercentage));

    return (
        <div
            className='flex flex-col gap-1'
        >
            <ProductRating rating={product.rating} />

            <p className='text-n7100 body-2-semi'>
                {product.label}
            </p>

            <p className='flex items-center gap-3'>
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
    )
}

export default ProductCardInfo;