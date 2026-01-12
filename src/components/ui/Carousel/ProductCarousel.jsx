import { useRef, useState, useEffect } from 'react';
import { ProductCard } from '@ui';
import { useScrollbarDrag } from '@hooks';

const ProductCarousel = ({ items, cardVariant }) => {
    const trackRef = useRef(null);
    const barRef = useRef(null);

    const [progress, setProgress] = useState(0);
    const [thumbRatio, setThumbRatio] = useState(1);

    /* Measure bar + thumb */
    useEffect(() => {
        if (!barRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const ratio = track.clientWidth / track.scrollWidth;

        setThumbRatio(Math.min(ratio, 1));
    }, [items.length]);

    /* Scroll -> progress */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onScroll = () => {
            const max = track.scrollWidth - track.clientWidth;
            setProgress(max === 0 ? 0 : track.scrollLeft / max);
        };

        track.addEventListener('scroll', onScroll);
        return () => track.removeEventListener('scroll', onScroll);
    }, []);

    const { startDrag } = useScrollbarDrag({
        trackRef,
        barRef,
        thumbRatio,
    });

    const barWidth = barRef.current?.clientWidth ?? 0;
    const thumbX = progress * (barWidth * (1 - thumbRatio));


    return (
        <>
            <ul
                ref={trackRef}
                className="
                h-[392px] 2xl:h-[433px]
                overflow-x-auto
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
                className="relative w-[311px] 2xl:w-[1120px] h-1 bg-n3100 rounded-[80px]"
            >
                <div
                    onMouseDown={startDrag}
                    className="absolute top-0 h-full bg-n5100 rounded cursor-pointer"
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

export default ProductCarousel;
