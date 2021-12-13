import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import * as nextRouter from 'next/router';
import ContactBlock from './ContactBlock';
import TextsContext from '../context/TextsContext';
import { textsEn, textsPt } from '../../utils/texts';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { Breakpoint } from '../../utils/useWindowSize';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
nextRouter.useRouter = jest.fn(() => ({
    query: {
        language: 'pt',
    },
}));

describe('<ContactBlock />', () => {
    test('renders properly', () => {
        const { container } = render(<ContactBlock />);

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

        const { container } = render(<ContactBlock />);

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

        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <ContactBlock />
            </TextsContext.Provider>
        );

        expect(screen.getByText(textsEn.contactMe1)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contactMe2)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contactMe3)).toBeInTheDocument();
        expect(screen.getByText(textsEn.needHelpWithYourBusiness)).toBeInTheDocument();
        expect(screen.getByText(textsEn.sendMeAnEmail)).toBeInTheDocument();
        expect(screen.getByText(textsEn.iAmAvailableToAdvise)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English and mobile', () => {
        (nextRouter.useRouter as jest.Mock).mockImplementationOnce(() => ({
            query: {
                language: 'en',
            },
        }));

        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <ContactBlock />
            </TextsContext.Provider>
        );

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
