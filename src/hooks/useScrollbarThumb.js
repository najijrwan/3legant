import { useEffect, useState } from 'react';

const useScrollbarThumb = ({ trackRef, barRef, deps = [] }) => {
    const [thumbRatio, setThumbRatio] = useState(1);
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        const bar = barRef.current;
        if (!track || !bar) return;

        const ratio = track.clientWidth / track.scrollWidth;
        setThumbRatio(Math.min(ratio, 1));
        setBarWidth(bar.clientWidth);
    }, deps);

    return { thumbRatio, barWidth };
};

export default useScrollbarThumb;
