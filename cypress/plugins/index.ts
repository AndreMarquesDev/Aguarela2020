import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
import { desktopViewportWidth, desktopViewportHeight } from '../utils/variables';

export default (on, config): void => {
    addMatchImageSnapshotPlugin(on, config);

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.isHeadless) {
            launchOptions.args.push(
                `--window-size=${desktopViewportWidth},${desktopViewportHeight}`
            );
        }

        if (browser.name === 'firefox' && browser.isHeadless) {
            launchOptions.args.push(`--width=${desktopViewportWidth}`);
            launchOptions.args.push(`--height=${desktopViewportHeight}`);
        }

        return launchOptions;
    });
};
