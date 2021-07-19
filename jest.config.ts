// for a detailed explanation regarding each configuration property and type check, visit:
// https://jestjs.io/docs/configuration

export default {
    // all imported modules in your tests should be mocked automatically
    // automock: false,

    // stop running tests after `n` failures
    // bail: 0,

    // the directory where Jest should store its cached dependency information
    // cacheDirectory: "C:\\Users\\andre\\AppData\\Local\\Temp\\jest",

    // automatically clear mock calls and instances between every test
    clearMocks: true,

    // indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // an array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,

    // the directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // an array of regexp pattern strings used to skip coverage collection
    // coveragePathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // indicates which provider should be used to instrument code for coverage
    // coverageProvider: "babel",

    // a list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // an object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,

    // a path to a custom dependency extractor
    // dependencyExtractor: undefined,

    // make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,

    // force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],

    // a path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,

    // a path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,

    // a set of global variables that need to be available in all test environments
    // globals: {},

    // the maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",

    // an array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],

    // an array of file extensions your modules use
    // moduleFileExtensions: [
    //   "js",
    //   "jsx",
    //   "ts",
    //   "tsx",
    //   "json",
    //   "node"
    // ],

    // a map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // moduleNameMapper: {},

    // an array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    // modulePathIgnorePatterns: [],

    // activates notifications for test results
    // notify: false,

    // an enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",

    // a preset that is used as a base for Jest's configuration
    // preset: undefined,

    // run tests from one or more projects
    // projects: undefined,

    // use this configuration option to add custom reporters to Jest
    // reporters: undefined,

    // automatically reset mock state between every test
    // resetMocks: false,

    // reset the module registry before running each individual test
    // resetModules: false,

    // a path to a custom resolver
    // resolver: undefined,

    // automatically restore mock state between every test
    // restoreMocks: false,

    // the root directory that Jest should scan for tests and modules within
    // rootDir: undefined,

    // a list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],

    // allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",

    // the paths to modules that run some code to configure or set up the testing environment before each test
    // setupFiles: [],

    // a list of paths to modules that run some code to configure or set up the testing framework before each test
    // setupFilesAfterEnv: [],

    // the number of seconds after which a test is considered as slow and reported as such in the results.
    // slowTestThreshold: 5,

    // a list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],

    // the test environment that will be used for testing
    testEnvironment: 'jsdom',

    // options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},

    // adds a location field to test results
    // testLocationInResults: false,

    // the glob patterns Jest uses to detect test files
    // testMatch: [
    //   "**/__tests__/**/*.[jt]s?(x)",
    //   "**/?(*.)+(spec|test).[tj]s?(x)"
    // ],

    // an array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    // testPathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // the regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],

    // this option allows the use of a custom results processor
    // testResultsProcessor: undefined,

    // this option allows use of a custom test runner
    // testRunner: "jest-circus/runner",

    // this option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    // testURL: "http://localhost",

    // setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // timers: "real",

    // a map from regular expressions to paths to transformers
    // transform: undefined,

    // an array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "\\\\node_modules\\\\",
    //   "\\.pnp\\.[^\\\\]+$"
    // ],

    // an array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,

    // indicates whether each individual test should be reported during the run
    // verbose: undefined,

    // an array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],

    // whether to use watchman for file crawling
    // watchman: true,
};
