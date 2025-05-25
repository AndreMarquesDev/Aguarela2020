import type { NextApiResponse } from 'next';
import type { SendMailOptions } from 'nodemailer';
import type { CustomNextApiRequest } from '../../src/types/CustomNextApiRequest';
import type { FormPostRequestBody } from '../../src/types/FormPostRequestBody';
import DOMPurify from 'isomorphic-dompurify';
import nodemailer from 'nodemailer';

const buildEmailOptions = (data: FormPostRequestBody): SendMailOptions => {
    const {
        name: dirtyName,
        email: dirtyEmail,
        message: dirtyMessage,
        brand: dirtyBrand,
        subject: dirtySubject,
        isPlaywright,
    } = data;

    const name = DOMPurify.sanitize(dirtyName);
    const email = DOMPurify.sanitize(dirtyEmail);
    const message = DOMPurify.sanitize(dirtyMessage);
    const brand = DOMPurify.sanitize(dirtyBrand);
    const subject = DOMPurify.sanitize(dirtySubject);

    const emailToSendFrom = process.env.NODEMAILER_SEND_EMAIL_FROM;
    const regularSubjectString = `aguareladigital.com - Contacto de ${name}${
        brand && ` da empresa ${brand}`
    }`;
    const testSubjectString = `Playwright E2E Test - aguareladigital.com | ${name} | ${brand}`;
    const emailBody = `<p>Assunto: ${subject}</p><br/><p>Email: ${email}</p><br/><p>${message}</p>`;

    const emailToSendTo = isPlaywright
        ? process.env.NODEMAILER_SEND_EMAIL_FROM
        : process.env.NODEMAILER_SEND_EMAIL_TO;
    const emailSubject = isPlaywright ? testSubjectString : regularSubjectString;

    return {
        from: emailToSendFrom,
        to: emailToSendTo,
        subject: emailSubject,
        html: emailBody,
    };
};

const responseSuccess = (response: NextApiResponse): void =>
    response.status(200).send({ messsage: 'Success' });
const responseError = (response: NextApiResponse): void =>
    response.status(400).send({ messsage: 'Error' });

const mockSuccess = process.env.NEXT_PUBLIC_MOCK_CONTACT_FORM_SUCCESS === 'true';
const mockError = process.env.NEXT_PUBLIC_MOCK_CONTACT_FORM_ERROR === 'true';

const submitContactForm = (req: CustomNextApiRequest, res: NextApiResponse): void => {
    // only allow POST requests
    if (req.method !== 'POST' || mockError) {
        responseError(res);

        return;
    }

    // return success if is dev
    if (mockSuccess) {
        responseSuccess(res);

        return;
    }

    const data = req.body;
    const emailOptions = buildEmailOptions(data);

    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_SEND_EMAIL_FROM,
            pass: process.env.NODEMAILER_SEND_EMAIL_FROM_PASS,
        },
    });

    const smtpCallback = (error: Error): void => {
        if (error) {
            responseError(res);
        } else {
            responseSuccess(res);
        }

        if (smtpTransport.close) {
            smtpTransport.close();
        }
    };

    smtpTransport.sendMail(emailOptions, smtpCallback);
};

export default submitContactForm;
