import { createContext, Context } from 'react';
import { Document } from 'prismic-javascript/d.ts/documents';

export interface INavLinksContext {
    navLinksPrismicDoc?: Document;
    setNavHeight?: React.Dispatch<React.SetStateAction<number>>;
}

const NavLinksContext: Context<INavLinksContext> = createContext(null);

export default NavLinksContext;
