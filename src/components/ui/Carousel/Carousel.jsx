import { useRef } from "react";

const Carousel = ({ children, index, onChange }) => {
    const startX = useRef(null);

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (startX.current === null) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX.current - endX;

        if (diff > 50) {
            // swipe left → next slide
            onChange?.(Math.min(index + 1, children.length - 1));
        } else if (diff < -50) {
            // swipe right → previous slide
            onChange?.(Math.max(index - 1, 0));
        }

        startX.current = null;
    };

    // Predefined translate classes (extend if you expect more slides)
    const translateClasses = [
        "translate-x-0",
        "-translate-x-[100%]",
        "-translate-x-[200%]",
        "-translate-x-[300%]",
    ];

    return (
        <div
            className={`flex h-full transition-transform duration-500 ease-out ${translateClasses[index]}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
};

export default Carousel;
