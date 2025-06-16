export enum FieldTypes {
    Name = 'name',
    Email = 'email',
    Textarea = 'message',
    Brand = 'brand',
    Subject = 'subject',
}
export type FormState = {
    name: string;
    email: string;
    message: string;
    brand: string;
    subject: string;
};

export const validateName = (value: string): boolean => {
    const nameRegex
        = /s*([a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]+([.,] |[\-' ]))+[a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]+\.?\s*$/;

    return nameRegex.test(value);
};

export const validateEmail = (value: string): boolean => {
    const emailRegex
        = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

    return emailRegex.test(value);
};
