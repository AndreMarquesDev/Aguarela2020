import { createContext, Context } from 'react';
import { IInstagramPost } from '../../utils/generic';

export interface IInstagramPostsContext {
    posts: IInstagramPost[];
}

const InstagramPostsContext: Context<IInstagramPostsContext> = createContext(null);

export default InstagramPostsContext;
