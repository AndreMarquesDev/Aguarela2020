export {};

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module 'js-cookie';

declare global {
    interface Window {
        isPlaywrightRunning: boolean;
    }
}
