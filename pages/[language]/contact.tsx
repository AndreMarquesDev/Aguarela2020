import React, { useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NavLinksContext, { NavLinksContextProps } from '../../components/context/NavLinksContext';
import { getCurrentLanguagetexts } from '../../utils/generic';
import { Locale } from '../../utils/locales';
import ContactBlock from '../../components/ContactBlock';
import ContactForm from '../../components/ContactForm';

const ContactPage: NextPage = () => {
    const {
        query,
    } = useRouter();

    const currentLanguage = query.language?.toString() as Locale;
    const translatedPageTitle = getCurrentLanguagetexts(currentLanguage).contact;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
    const navLinksContext: NavLinksContextProps = {
        isMenuOpen,
        toggleMenu,
    };

    return (
        <NavLinksContext.Provider value={navLinksContext}>
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
