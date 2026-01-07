import { Icon } from '@ui';
import { Badges } from '@product';

const ProductCard = ({ product, variant }) => {
    return (
        <li
            className="
            h-full
            flex flex-col gap-3"
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
                className="
                "
            >

            </div>
        </li>
    );
}

export default ProductCard;