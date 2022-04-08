import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Workflow } from './Workflow';
import { TextsContext } from '../context/TextsContext';
import { textsEn, textsPt } from '../../utils/texts';

const renderComponent = (): RenderResult => {
    return render(<Workflow />);
};

describe('<Workflow />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(textsPt.workflow)).toBeInTheDocument();
        expect(screen.getByText(textsPt.defineTarget)).toBeInTheDocument();
        expect(screen.getByText(textsPt.whatIsTheTarget)).toBeInTheDocument();
        expect(screen.getByText(textsPt.defineGoals)).toBeInTheDocument();
        expect(screen.getByText(textsPt.whatAreYourGoals)).toBeInTheDocument();
        expect(screen.getByText(textsPt.platformStrategy)).toBeInTheDocument();
        expect(screen.getByText(textsPt.whatPlatforms)).toBeInTheDocument();
        expect(screen.getByText(textsPt.contentCreation)).toBeInTheDocument();
        expect(screen.getByText(textsPt.relevantContentCreation)).toBeInTheDocument();
        expect(screen.getByText(textsPt.paidSocialAndInfluencers)).toBeInTheDocument();
        expect(screen.getByText(textsPt.promotePostsAndCollaborate)).toBeInTheDocument();
        expect(screen.getByText(textsPt.insightsAndReports)).toBeInTheDocument();
        expect(screen.getByText(textsPt.detailedAnalysis)).toBeInTheDocument();
        expect(screen.getByText(textsPt.optimization)).toBeInTheDocument();
        expect(screen.getByText(textsPt.improvementsAndUpdatesToTheStrategy)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <Workflow />
            </TextsContext.Provider>
        );

        expect(screen.getByText(textsEn.workflow)).toBeInTheDocument();
        expect(screen.getByText(textsEn.defineTarget)).toBeInTheDocument();
        expect(screen.getByText(textsEn.whatIsTheTarget)).toBeInTheDocument();
        expect(screen.getByText(textsEn.defineGoals)).toBeInTheDocument();
        expect(screen.getByText(textsEn.whatAreYourGoals)).toBeInTheDocument();
        expect(screen.getByText(textsEn.platformStrategy)).toBeInTheDocument();
        expect(screen.getByText(textsEn.whatPlatforms)).toBeInTheDocument();
        expect(screen.getByText(textsEn.contentCreation)).toBeInTheDocument();
        expect(screen.getByText(textsEn.relevantContentCreation)).toBeInTheDocument();
        expect(screen.getByText(textsEn.paidSocialAndInfluencers)).toBeInTheDocument();
        expect(screen.getByText(textsEn.promotePostsAndCollaborate)).toBeInTheDocument();
        expect(screen.getByText(textsEn.insightsAndReports)).toBeInTheDocument();
        expect(screen.getByText(textsEn.detailedAnalysis)).toBeInTheDocument();
        expect(screen.getByText(textsEn.optimization)).toBeInTheDocument();
        expect(screen.getByText(textsEn.improvementsAndUpdatesToTheStrategy)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
