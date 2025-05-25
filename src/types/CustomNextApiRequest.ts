import type { NextApiRequest } from 'next';
import type { FormPostRequestBody } from './FormPostRequestBody';

export type CustomNextApiRequest = {
    body: FormPostRequestBody;
} & NextApiRequest;
