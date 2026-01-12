import { useRef } from 'react';

const SWIPE_THRESHOLD = 50;

const useSwipe = ({ onSwipeLeft, onSwipeRight }) => {
    const startX = useRef(null);

    const onTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
        if (startX.current === null) return;

        const endX = e.changedTouches[0].clientX;
        const diff = startX.current - endX;

        if (diff > SWIPE_THRESHOLD) {
            onSwipeLeft?.();
        } else if (diff < -SWIPE_THRESHOLD) {
            onSwipeRight?.();
        }

        startX.current = null;
    };

    return {
        onTouchStart,
        onTouchEnd,
    };
};

export default useSwipe;
