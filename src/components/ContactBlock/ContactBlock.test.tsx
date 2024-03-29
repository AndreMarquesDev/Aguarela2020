import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import mockRouter from 'next-router-mock';
import { ContactBlock } from './ContactBlock';
import { textsEn, textsPt } from '../../utils/texts';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { Breakpoint } from '../../utils/useWindowSize';
import { MockProviders } from '../../utils/jest/MockProviders';
import { Locale } from '../../types/Locale';

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <ContactBlock />
        </MockProviders>
    );
};

describe('<ContactBlock />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.contactMe1)).toBeInTheDocument();
        expect(screen.getByText(textsPt.contactMe2)).toBeInTheDocument();
        expect(screen.getByText(textsPt.contactMe3)).toBeInTheDocument();
        expect(screen.getByText(textsPt.needHelpWithYourBusiness)).toBeInTheDocument();
        expect(screen.getByText(textsPt.sendMeAnEmail)).toBeInTheDocument();
        expect(screen.getByText(textsPt.iAmAvailableToAdvise)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent();

        expect(screen.queryByText(textsPt.contactMe1)).not.toBeInTheDocument();
        expect(screen.queryByText(textsPt.contactMe2)).not.toBeInTheDocument();
        expect(screen.queryByText(textsPt.contactMe3)).not.toBeInTheDocument();
        expect(
            screen.getByText(`${textsPt.contactMe1}${textsPt.contactMe2}${textsPt.contactMe3}`)
        ).toBeInTheDocument();
        expect(screen.getByText(textsPt.needHelpWithYourBusiness)).toBeInTheDocument();
        expect(screen.getByText(textsPt.sendMeAnEmail)).toBeInTheDocument();
        expect(screen.getByText(textsPt.iAmAvailableToAdvise)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        setJestWindowWidth(Breakpoint.Desktop);

        const { container } = renderComponent(Locale.En);

        expect(screen.getByText(textsEn.contactMe1)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contactMe2)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contactMe3)).toBeInTheDocument();
        expect(screen.getByText(textsEn.needHelpWithYourBusiness)).toBeInTheDocument();
        expect(screen.getByText(textsEn.sendMeAnEmail)).toBeInTheDocument();
        expect(screen.getByText(textsEn.iAmAvailableToAdvise)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English and mobile', () => {
        mockRouter.query = {
            language: 'en',
        };

        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent(Locale.En);

        expect(screen.queryByText(textsEn.contactMe1)).not.toBeInTheDocument();
        expect(screen.queryByText(textsEn.contactMe2)).not.toBeInTheDocument();
        expect(screen.queryByText(textsEn.contactMe3)).not.toBeInTheDocument();
        expect(screen.getByText(`${textsEn.contactMe1}${textsEn.contactMe2}t`)).toBeInTheDocument();
        expect(screen.getByText(textsEn.needHelpWithYourBusiness)).toBeInTheDocument();
        expect(screen.getByText(textsEn.sendMeAnEmail)).toBeInTheDocument();
        expect(screen.getByText(textsEn.iAmAvailableToAdvise)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
