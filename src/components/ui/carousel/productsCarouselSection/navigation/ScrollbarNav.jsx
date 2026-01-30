import { useEffect, useRef, useState } from 'react';

const ScrollbarNav = ({ trackRef, viewportRef }) => {
    const barRef = useRef(null);
    const [thumbWidth, setThumbWidth] = useState(0);
    const [thumbLeft, setThumbLeft] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        const viewport = viewportRef.current;
        const bar = barRef.current;

        if (!track || !viewport || !bar) return;

        const update = () => {
            const visibleRatio = viewport.clientWidth / track.scrollWidth;
            setThumbWidth(bar.clientWidth * visibleRatio);
            setThumbLeft(
                (track.scrollLeft / track.scrollWidth) * bar.clientWidth
            );
        };

        update();
        track.addEventListener('scroll', update);
        window.addEventListener('resize', update);

        return () => {
            track.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [trackRef, viewportRef]);

    const onDrag = e => {
        const bar = barRef.current;
        const track = trackRef.current;
        if (!bar || !track) return;

        const rect = bar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        track.scrollLeft = percent * track.scrollWidth;
    };

    return (
        <div ref={barRef} onMouseDown={onDrag}>
            <span
                style={{
                    width: thumbWidth,
                    transform: `translateX(${thumbLeft}px)`,
                }}
            />
        </div>
    );
};

export default ScrollbarNav;
