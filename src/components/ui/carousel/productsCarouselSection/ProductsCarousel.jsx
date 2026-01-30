import { useRef } from 'react';
import { ScrollbarNav } from '@ui';

const ProductsCarousel = ({ products, navMode, }) => {
    const trackRef = useRef(null);
    const viewportRef = useRef(null);

    return (
        <>
            <div ref={viewportRef}>
                <ul ref={trackRef}>
                    {products.map(product => (
                        <li
                            key={product.id}
                            className="
                            h-full
                            flex flex-col gap-3
                            group cursor-pointer"
                        >
                            <ProductCard
                                key={index}
                                product={product}
                                variant={cardVariant}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {navMode === 'scrollbar' && (
                <ScrollbarNav
                    trackRef={trackRef}
                    viewportRef={viewportRef}
                />
            )}

            <div className="2xl:hidden" />
        </>
    );
};

export default ProductsCarousel;
