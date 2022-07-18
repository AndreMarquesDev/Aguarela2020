// eslint-disable-next-line import/no-extraneous-dependencies
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';
import { defaultViewportWidth, defaultViewportHeight } from '../utils/variables';

// eslint-disable-next-line id-length
export default (on, config): void => {
    addMatchImageSnapshotPlugin(on, config);

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.isHeadless) {
            launchOptions.args.push(
                `--window-size=${defaultViewportWidth},${defaultViewportHeight}`
            );
        }

        if (browser.name === 'firefox' && browser.isHeadless) {
            launchOptions.args.push(`--width=${defaultViewportWidth}`);
            launchOptions.args.push(`--height=${defaultViewportHeight}`);
        }

        return launchOptions;
    });
};
