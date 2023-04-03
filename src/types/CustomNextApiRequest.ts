import { NextApiRequest } from 'next';
import { FormPostRequestBody } from './FormPostRequestBody';

export interface CustomNextApiRequest extends NextApiRequest {
    body: FormPostRequestBody;
}
