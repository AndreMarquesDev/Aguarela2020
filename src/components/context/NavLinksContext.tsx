import type { Context } from 'react';
import { createContext } from 'react';

export type NavLinksContextProps = {
    isMenuOpen: boolean;
    toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setNavHeight?: React.Dispatch<React.SetStateAction<number>>;
};

// @ts-ignore
export const NavLinksContext: Context<NavLinksContextProps> = createContext(null);
