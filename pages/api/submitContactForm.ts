import { NextApiResponse } from 'next';
import nodemailer, { SendMailOptions } from 'nodemailer';
import { CustomNextApiRequest } from '../../types/CustomNextApiRequest';
import { FormPostRequestBody } from '../../types/FormPostRequestBody';

const buildEmailOptions = (data: FormPostRequestBody): SendMailOptions => {
    const { name, email, message, brand, subject, isTest } = data;

    const emailToSendFrom = process.env.NODEMAILER_SEND_EMAIL_FROM;
    const regularSubjectString = `aguareladigital.com - Contacto de ${name}${
        brand && ` da empresa ${brand}`
    }`;
    const testSubjectString = `Aguarela Contact Form - Cypress | ${name} | ${brand}`;
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

const submitContactForm = (req: CustomNextApiRequest, res: NextApiResponse): void => {
    const data = req.body;
    const emailOptions = buildEmailOptions(data);

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
            res.status(400).send({ messsage: 'Error' });
        } else {
            res.status(200).send({ messsage: 'Success' });
        }

        smtpTransport.close();
    };

    smtpTransport.sendMail(emailOptions, smtpCallback);
};

export default submitContactForm;
