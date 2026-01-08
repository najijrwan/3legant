import { useRef, useState, useEffect } from 'react';
import { ProductCard } from '@product';

const ProductCarousel = ({ items, cardVariant }) => {
    const trackRef = useRef(null);
    const barRef = useRef(null);
    const isDraggingRef = useRef(false);

    const [progress, setProgress] = useState(0);
    const [thumbWidth, setThumbWidth] = useState(1);

    const [barWidth, setBarWidth] = useState(0);

    const maxThumbX = barWidth * (1 - thumbWidth);
    const thumbX = maxThumbX * progress;

    useEffect(() => {
        if (!barRef.current) return;
        setBarWidth(barRef.current.clientWidth);
    }, []);


    /* ================================
       Sync scroll -> progress
    ================================= */
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        const onScroll = () => {
            const maxScroll = el.scrollWidth - el.clientWidth;
            const value = maxScroll === 0 ? 0 : el.scrollLeft / maxScroll;
            setProgress(value);
        };

        el.addEventListener('scroll', onScroll);
        return () => el.removeEventListener('scroll', onScroll);
    }, []);

    /* ================================
       Calculate thumb width
    ================================= */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const ratio = track.clientWidth / track.scrollWidth;
        setThumbWidth(Math.min(ratio, 1));
    }, [items]);

    /* ================================
       Drag logic
    ================================= */
    useEffect(() => {
        const onMouseMove = (e) => {
            if (!isDraggingRef.current) return;

            const track = trackRef.current;
            const bar = barRef.current;
            if (!track || !bar) return;

            const rect = bar.getBoundingClientRect();
            const thumbPx = thumbWidth * rect.width;

            const x = e.clientX - rect.left - thumbPx / 2;
            const maxX = rect.width - thumbPx;

            const ratio = Math.min(Math.max(x / maxX, 0), 1);
            const maxScroll = track.scrollWidth - track.clientWidth;

            track.scrollLeft = ratio * maxScroll;
        };

        const onMouseUp = () => {
            isDraggingRef.current = false;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [thumbWidth]);

    const onMouseDown = (e) => {
        isDraggingRef.current = true;
        e.preventDefault();
    };

    return (
        <>
            <ul
                ref={trackRef}
                className="
                    h-[392px] 2xl:h-[433px]
                    overflow-x-auto
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

            {/* Custom scrollbar */}
            <div
                ref={barRef}
                className="relative w-[1120px] h-2 bg-black rounded mt-4"
            >
                <div
                    onMouseDown={onMouseDown}
                    className="absolute top-0 h-full bg-green rounded cursor-pointer"
                    style={{
                        width: `${thumbWidth * 100}%`,
                        transform: `translateX(${thumbX}px)`,
                    }}
                />
            </div>

            {/* Debug (remove later) */}
            <div className="text-xs opacity-50">
                progress: {progress.toFixed(2)}
            </div>
        </>
    );
};

export default ProductCarousel;
