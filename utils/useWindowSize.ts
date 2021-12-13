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

export enum Breakpoint {
    Desktop = 1280,
    Phablet = 1023,
    Tablet = 767,
    Mobile = 511,
}
