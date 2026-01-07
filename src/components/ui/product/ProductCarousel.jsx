import { ProductCard } from '@product';

const ProductCarousel = ({ items, cardVariant }) => {
    return (
        <ul
            className="
                h-[392px] 2xl:h-[433px] overflow-x-auto
                flex gap-4 2xl:gap-6"
        >
            {items.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    variant={cardVariant}
                />
            ))}
        </ul>
    );
};

export default ProductCarousel;