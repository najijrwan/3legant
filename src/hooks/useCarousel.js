import { useState, useMemo } from 'react';

const useCarousel = (images, thumbCount = 3) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbStart, setThumbStart] = useState(0);

    const hasPrev = activeIndex > 0;
    const hasNext = activeIndex < images.length - 1;

    const maxThumbStart = Math.max(0, images.length - (thumbCount + 1));

    const handleNext = () => {
        if (!hasNext) return;
        const nextIndex = activeIndex + 1;
        setActiveIndex(nextIndex);
        if (nextIndex > thumbStart && thumbStart < maxThumbStart) {
            setThumbStart(prev => Math.min(prev + 1, maxThumbStart));
        }
    };

    const handlePrev = () => {
        if (!hasPrev) return;
        const prevIndex = activeIndex - 1;
        setActiveIndex(prevIndex);
        if (prevIndex < thumbStart) setThumbStart(prevIndex);
    };

    const visibleThumbnails = useMemo(() => {
        return images.slice(thumbStart + 1, thumbStart + 1 + thumbCount);
    }, [images, thumbStart, thumbCount]);

    return {
        activeIndex,
        thumbStart,
        visibleThumbnails,
        hasPrev,
        hasNext,
        handleNext,
        handlePrev,
        setActiveIndex,
    };
};

export default useCarousel;