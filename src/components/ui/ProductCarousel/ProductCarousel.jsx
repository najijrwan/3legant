import { useRef, useState, useEffect } from 'react';
import { ProductCard } from '@product';

const ProductCarousel = ({ items, cardVariant }) => {
    const trackRef = useRef(null);
    const barRef = useRef(null);
    const draggingRef = useRef(false);

    const [progress, setProgress] = useState(0);
    const [thumbRatio, setThumbRatio] = useState(1);
    const [barWidth, setBarWidth] = useState(0);

    /* ================================
       Measure bar + thumb
    ================================= */
    useEffect(() => {
        if (!barRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const ratio = track.clientWidth / track.scrollWidth;

        setThumbRatio(Math.min(ratio, 1));
        setBarWidth(barRef.current.clientWidth);
    }, [items]);

    /* ================================
       Scroll -> progress
    ================================= */
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

    /* ================================
       Drag thumb -> scroll
    ================================= */
    useEffect(() => {
        const onMouseMove = (e) => {
            if (!draggingRef.current) return;

            const track = trackRef.current;
            const bar = barRef.current;
            if (!track || !bar) return;

            const rect = bar.getBoundingClientRect();
            const thumbPx = thumbRatio * rect.width;

            const x = e.clientX - rect.left - thumbPx / 2;
            const maxX = rect.width - thumbPx;
            const ratio = Math.min(Math.max(x / maxX, 0), 1);

            track.scrollLeft = ratio * (track.scrollWidth - track.clientWidth);
        };

        const stopDrag = () => (draggingRef.current = false);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', stopDrag);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDrag);
        };
    }, [thumbRatio]);

    const startDrag = (e) => {
        draggingRef.current = true;
        e.preventDefault();
    };

    /* ================================
       Derived thumb position
    ================================= */
    const thumbX = progress * barWidth * (1 - thumbRatio);

    return (
        <>
            <ul
                ref={trackRef}
                className="
                    h-[392px] 2xl:h-[433px]
                    overflow-x-auto scroll-
                    flex gap-4 2xl:gap-6
                "
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

            <div></div>
        </>
    );
};

export default ProductCarousel;
