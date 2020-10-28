import { createContext, Context } from 'react';

export interface NavLinksContextProps {
    setNavHeight?: React.Dispatch<React.SetStateAction<number>>;
}

const NavLinksContext: Context<NavLinksContextProps> = createContext(null);

export default NavLinksContext;
