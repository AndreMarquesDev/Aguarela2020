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
    const nameRegex =
        // eslint-disable-next-line regexp/no-unused-capturing-group, regexp/prefer-plus-quantifier, regexp/prefer-character-class, regexp/no-super-linear-backtracking, regexp/no-useless-escape
        /s*([a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]{1,}([\.,] |[-']| ))+[a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]+\.?\s*$/;

    return nameRegex.test(value);
};

export const validateEmail = (value: string): boolean => {
    const emailRegex =
        // eslint-disable-next-line regexp/no-useless-escape, regexp/no-unused-capturing-group, regexp/prefer-d, regexp/use-ignore-case
        /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(value);
};
