import { createContext, Context } from 'react';

export interface NavLinksContextProps {
    isMenuOpen: boolean;
    toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setNavHeight?: React.Dispatch<React.SetStateAction<number>>;
}

// @ts-ignore
export const NavLinksContext: Context<NavLinksContextProps> = createContext(null);
