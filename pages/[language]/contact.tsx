import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../src/components/Layout/Layout';
import {
    NavLinksContext,
    NavLinksContextProps,
} from '../../src/components/context/NavLinksContext';
import { getCurrentLanguagetexts } from '../../src/utils/generic';
import { Locale } from '../../src/types/Locale';
import { ContactBlock } from '../../src/components/ContactBlock/ContactBlock';
import { ContactForm } from '../../src/components/ContactForm/ContactForm';

const ContactPage: NextPage = () => {
    const { query } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).contact;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinksContextValue = useMemo<NavLinksContextProps>(
        () => ({
            isMenuOpen,
            toggleMenu: () => setIsMenuOpen(!isMenuOpen),
        }),
        [isMenuOpen]
    );

    return (
        <NavLinksContext.Provider value={navLinksContextValue}>
            <Layout>
                <Head>
                    <title>{translatedPageTitle} - Aguarela Digital</title>
                </Head>

                <ContactBlock />
                <ContactForm />
            </Layout>
        </NavLinksContext.Provider>
    );
};

export default ContactPage;
