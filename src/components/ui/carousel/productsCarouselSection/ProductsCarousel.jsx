import { useRef } from 'react';
import { ProductCard } from '@ui';

import { useScrollbarThumb, useScrollProgress, useDragToScroll } from '@hooks';

const ProductsCarousel = ({ items, cardVariant }) => {
    const trackRef = useRef(null);
    const barRef = useRef(null);

    const { thumbRatio, barWidth } =
        useScrollbarThumb({
            trackRef,
            barRef,
            deps: [items],
        });

    const progress = useScrollProgress(trackRef);

    const { startDrag, thumbX } =
        useDragToScroll({
            trackRef,
            barRef,
            thumbRatio,
            barWidth,
            progress,
        });

    return (
        <>
            <ul
                ref={trackRef}
                className="
                    h-[392px] 2xl:h-[433px] hide-scrollbar overflow-x-auto
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

            <div
                ref={barRef}
                className="
                    relative
                    w-[311px] 2xl:w-[1120px] h-1
                    bg-n3100 rounded-[80px]"
            >
                <div
                    onMouseDown={startDrag}
                    className="
                        absolute top-0 h-full
                        bg-n5100 rounded
                        cursor-pointer"
                    style={{
                        width: `${thumbRatio * 100}%`,
                        transform: `translateX(${thumbX}px)`,
                    }}
                />
            </div>

            <div className="2xl:hidden" />
        </>
    );
};

export default ProductsCarousel;
