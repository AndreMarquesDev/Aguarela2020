import { FormValues } from './FormValues';

export interface FormPostRequestBody extends FormValues {
    isTest: boolean;
}
