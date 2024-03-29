// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { contactFormBackendUrl } from '../urls';

export const initializeAxiosMockAdapter = (delay = 0, isSuccess = true): void => {
    const mock = new MockAdapter(axios, {
        delayResponse: delay,
    });

    const httpStatusCode = isSuccess ? 200 : 500;

    mock.onPost(contactFormBackendUrl).reply(httpStatusCode, {});
};
