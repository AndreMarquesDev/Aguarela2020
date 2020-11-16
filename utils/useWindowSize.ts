import { useState, useEffect } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

export const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = (): void => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export const desktopBreakpoint = 1280;
export const phabletBreakpoint = 1023;
export const tabletBreakpoint = 767;
export const mobileBreakpoint = 511;
