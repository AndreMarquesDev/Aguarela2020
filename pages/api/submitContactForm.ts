import { NextApiResponse } from 'next';
import nodemailer, { SendMailOptions } from 'nodemailer';
import DOMPurify from 'isomorphic-dompurify';
import { CustomNextApiRequest } from '../../types/CustomNextApiRequest';
import { FormPostRequestBody } from '../../types/FormPostRequestBody';
import { isDev } from '../../utils/generic';

const buildEmailOptions = (data: FormPostRequestBody): SendMailOptions => {
    const {
        name: dirtyName,
        email: dirtyEmail,
        message: dirtyMessage,
        brand: dirtyBrand,
        subject: dirtySubject,
        isTest,
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
    const testSubjectString = `Aguarela Contact Form - E2E | ${name} | ${brand}`;
    const emailBody = `<p>Assunto: ${subject}</p><br/><p>Email: ${email}</p><br/><p>${message}</p>`;

    const emailToSendTo = isTest
        ? process.env.NODEMAILER_SEND_EMAIL_FROM
        : process.env.NODEMAILER_SEND_EMAIL_TO;
    const emailSubject = isTest ? testSubjectString : regularSubjectString;

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

const submitContactForm = (req: CustomNextApiRequest, res: NextApiResponse): void => {
    // only allow POST requests
    if (req.method !== 'POST') {
        responseError(res);

        return;
    }

    const data = req.body;
    const emailOptions = buildEmailOptions(data);

    // return success if is dev
    if (isDev) {
        responseSuccess(res);

        return;
    }

    const smtpTransport = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        tls: {
            ciphers: 'SSLv3',
        },
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
