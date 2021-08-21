// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const initializeAxiosMockAdapter = (): void => {
    const mock = new MockAdapter(axios, {
        delayResponse: 1000,
    });

    mock.onPost('https://aguarela-contact-form-backend.herokuapp.com/api/sendEmail').reply(200, {});
};
