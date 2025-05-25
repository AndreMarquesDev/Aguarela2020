import type { FormValues } from './FormValues';

export type FormPostRequestBody = {
    isPlaywright: boolean;
} & FormValues;
