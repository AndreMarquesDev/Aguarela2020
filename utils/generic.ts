export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
export const getPrismicText = (content: object): string => content[0].text;
