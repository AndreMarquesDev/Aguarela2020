export enum FieldTypes {
    Name = 'name',
    Email = 'email',
    Textarea = 'message',
    Brand = 'brand',
    Subject = 'subject',
}

export interface FormState {
    name: string;
    email: string;
    message: string;
    brand: string;
    subject: string;
}

export const validateName = (value: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const nameRegex = /s*([a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]{1,}([\.,] |[-']| ))+[a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]+\.?\s*$/;

    return nameRegex.test(value);
};

export const validateEmail = (value: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(value);
};
