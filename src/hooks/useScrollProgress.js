import { useEffect, useState } from 'react';

const useScrollProgress = (trackRef) => {
    const [progress, setProgress] = useState(0);

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

    return progress;
};

export default useScrollProgress;
