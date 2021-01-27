export const validateName = (value: string): boolean => {
    const nameRegex = /s*([a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]{1,}([\.,] |[-']| ))+[a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]+\.?\s*$/;

    return nameRegex.test(value);
};

export const validateEmail = (value: string): boolean => {
    const emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(value);
};

export const validateTextarea = (value: string): boolean => !!value;
