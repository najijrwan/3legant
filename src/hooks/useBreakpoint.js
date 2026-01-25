// hooks/useBreakpoint.js
import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 375; // match Tailwind lg / 2xl logic

export default function useBreakpoint() {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= MOBILE_BREAKPOINT
    );

    console.log(isMobile);

    useEffect(() => {
        const onResize = () =>
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return { isMobile };
}
