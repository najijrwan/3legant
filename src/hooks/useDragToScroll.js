import { useEffect, useRef } from 'react';

const useDragToScroll = ({
    trackRef,
    barRef,
    thumbRatio,
    barWidth,
    progress,
}) => {
    const draggingRef = useRef(false);

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

            track.scrollLeft =
                ratio * (track.scrollWidth - track.clientWidth);
        };

        const stopDrag = () => {
            draggingRef.current = false;
        };

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

    const thumbX = progress * barWidth * (1 - thumbRatio);

    return { startDrag, thumbX };
};

export default useDragToScroll;
