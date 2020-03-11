import { useState, useEffect } from 'react';
import { isClientSide } from './routing/config';

export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

interface IWindowDimensions {
    windowWidth: number;
    windowHeight: number;
}

export const useWindowSize = (): IWindowDimensions => {
    const getWindowDimensions = (): IWindowDimensions => {
        const windowDimensions = {
            windowWidth: isClientSide ? window.innerWidth : undefined,
            windowHeight: isClientSide ? window.innerHeight : undefined,
        };

        return windowDimensions;
    };

    const [windowSize, setWindowSize] = useState(getWindowDimensions);

    useEffect(() => {
        const handleResize = (): void => setWindowSize(getWindowDimensions());

        window.addEventListener('resize', handleResize);

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
