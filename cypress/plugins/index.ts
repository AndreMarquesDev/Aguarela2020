// eslint-disable-next-line import/no-extraneous-dependencies
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

// eslint-disable-next-line id-length
export default (on, config): void => {
    addMatchImageSnapshotPlugin(on, config);
};
