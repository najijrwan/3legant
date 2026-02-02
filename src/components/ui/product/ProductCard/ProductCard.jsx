import { Badges, WishlistBtn, AddToCartBtn, ProductCardInfo } from '@ui';

const ProductCard = ({ product, className = '' }) => {
    return (
        <>
            <div
                className={`
                relative
                bg-n2100 h-[203px] 2xl:h-[349px]
                ${className}`}
            >
                <img
                    src={product.image}
                    alt={`${product.image} image`}
                    className="size-full object-contain"
                />

                <Badges
                    variant='medium'
                    discountPercentage={product.discountPercentage}
                    containerClass='left-4 top-4'
                />

                <WishlistBtn />

                <AddToCartBtn
                    className='
                    absolute right-1/2 translate-x-1/2 bottom-3.5 2xl:bottom-4 2xl:translate-y-1/2
                    px-6 py-2
                    text-n1100
                    opacity-100 2xl:opacity-0
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-400 east-out'
                />
            </div>

            <ProductCardInfo product={product} />
        </>
    );
}

export default ProductCard;