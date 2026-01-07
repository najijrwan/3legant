import { Icon } from '@ui';
import { Badges } from '@product';

const ProductCard = ({ product, variant }) => {
    return (
        <li
            className="
            h-[392px]
            flex flex-col gap-3"
        >
            <div
                className="
                    relative
                    w-[231px] h-[308px] 2xl:[349px]
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