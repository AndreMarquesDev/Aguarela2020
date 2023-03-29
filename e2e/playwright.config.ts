import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import * as dotenv from 'dotenv';

/**
 * read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config();

/**
 * see https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    testDir: './',
    /* maximum time one test can run for. */
    timeout: 30 * 1000,
    expect: {
        /**
         * maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000,
        toHaveScreenshot: {
            maxDiffPixelRatio: 0.015,
        },
    },
    /* run tests in files in parallel */
    fullyParallel: true,
    /* fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* opt out of parallel tests on CI. */
    // workers: process.env.CI ? 1 : undefined,
    /* reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'list',
    /* shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        /* base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://localhost:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    /* configure projects for major browsers */
    projects: [
        // {
        //     name: 'chromium',
        //     use: {
        //         ...devices['Desktop Chrome'],
        //     },
        // },

        // {
        //     name: 'firefox',
        //     use: {
        //         ...devices['Desktop Firefox'],
        //     },
        // },

        // {
        //     name: 'webkit',
        //     use: {
        //         ...devices['Desktop Safari'],
        //     },
        // },
        {
            name: 'chrome',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'edge',
            use: { ...devices['Desktop Edge'] },
        },
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
            },
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
            },
        },

        /* test against mobile viewports. */
        {
            name: 'chrome-mobile',
            use: {
                ...devices['Pixel 5'],
            },
        },
        {
            name: 'safari-mobile',
            use: {
                ...devices['iPhone 12'],
            },
        },
    ],

    /* folder for test artifacts such as screenshots, videos, traces, etc. */
    outputDir: 'test-results/',

    /* run your local dev server before starting the tests */
    webServer: {
        command: 'yarn start',
        port: 3000,
    },
    updateSnapshots: 'missing',
    // updateSnapshots: 'all',
    // https://playwright.dev/docs/next/api/class-testproject#test-project-snapshot-dir
    snapshotPathTemplate: '{testDir}/screenshots/{platform}/{projectName}/{arg}{ext}',
};

export default config;
