import { useEffect, useState } from 'react';

type WindowSize = {
    width: number;
    height: number;
};

export const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = (): void => {
            // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
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
