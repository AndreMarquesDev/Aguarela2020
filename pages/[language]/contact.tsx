import type { NextPage } from 'next';
import type {
    NavLinksContextProps,
} from '../../src/components/context/NavLinksContext';
import type { Locale } from '../../src/types/Locale';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { ContactBlock } from '../../src/components/ContactBlock/ContactBlock';
import { ContactForm } from '../../src/components/ContactForm/ContactForm';
import {
    NavLinksContext,
} from '../../src/components/context/NavLinksContext';
import { Layout } from '../../src/components/Layout/Layout';
import { getCurrentLanguagetexts } from '../../src/utils/generic';

const ContactPage: NextPage = () => {
    const { query } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).contact;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinksContextValue = useMemo<NavLinksContextProps>(
        () => ({
            isMenuOpen,
            toggleMenu: (): void => setIsMenuOpen(!isMenuOpen),
        }),
        [isMenuOpen],
    );

    return (
        <NavLinksContext.Provider value={navLinksContextValue}>
            <Layout>
                <Head>
                    <title>
                        {translatedPageTitle}
                        {' '}
                        - Aguarela Digital
                    </title>
                </Head>

                <ContactBlock />
                <ContactForm />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default ContactPage;
