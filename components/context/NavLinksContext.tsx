import { createContext, Context } from 'react';
import { Document } from 'prismic-javascript/d.ts/documents';

export interface NavLinksContextProps {
    navLinksPrismicDoc?: Document;
    setNavHeight?: React.Dispatch<React.SetStateAction<number>>;
}

const NavLinksContext: Context<NavLinksContextProps> = createContext(null);

export default NavLinksContext;
