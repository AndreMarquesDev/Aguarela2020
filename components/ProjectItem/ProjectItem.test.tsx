import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import { ProjectItem, ProjectItemProps } from './ProjectItem';
import { textsEn, textsPt } from '../../utils/texts';
import TextsContext from '../context/TextsContext';
import { projectItemTouchDivDataTestId } from '../../utils/dataTestIds';
import { tjelaInstagramUrl } from '../../utils/urls';

const baseProps: ProjectItemProps = {
    brandLink: tjelaInstagramUrl,
    brandTag: '@tudonatjela',
    description: textsPt.socialMediaManagementAndContentCreation,
    imageAlt: 'tjela logo',
    imageSrc: '/images/tjela.jpg',
    isDesktop: true,
    isInPartnership: true,
    isActive: true,
    isGrid: true,
    year: 2020,
};

const renderComponent = (newProps?: Partial<ProjectItemProps>): RenderResult => {
    return render(<ProjectItem {...baseProps} {...newProps} />);
};

describe('<ProjectItem />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const image = screen.getByAltText(baseProps.imageAlt);
        const brandLink = screen.getByText(baseProps.brandTag);
        const description = screen.getByText(baseProps.description);
        const year = screen.getByText(`${baseProps.year} - ${textsPt.present}`);
        const isInPartership = screen.getByText(`* ${textsPt.inPartnershipWith}`);

        expect(image).toBeInTheDocument();
        expect(brandLink).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(year).toBeInTheDocument();
        expect(isInPartership).toBeInTheDocument();

        expect(brandLink).toHaveAttribute('href', baseProps.brandLink);

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <ProjectItem
                    {...baseProps}
                    description={textsEn.socialMediaManagementAndContentCreation}
                />
            </TextsContext.Provider>
        );

        const year = screen.getByText(`${baseProps.year} - ${textsEn.present}`);
        const isInPartership = screen.getByText(`* ${textsEn.inPartnershipWith}`);

        expect(year).toBeInTheDocument();
        expect(isInPartership).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly in mobile', () => {
        const { container } = renderComponent({ isDesktop: false });

        const image = screen.getByAltText(baseProps.imageAlt);
        const brandLink = screen.getByText(baseProps.brandTag);
        const description = screen.getByText(baseProps.description);
        const year = screen.getByText(`${baseProps.year} - ${textsPt.present}`);
        const isInPartership = screen.getByText(`* ${textsPt.inPartnershipWith}`);

        expect(image).toBeInTheDocument();
        expect(brandLink).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(year).toBeInTheDocument();
        expect(isInPartership).toBeInTheDocument();

        expect(brandLink).toHaveAttribute('href', baseProps.brandLink);

        expect(container).toMatchSnapshot();
    });

    test('renders properly with the year as a string', () => {
        renderComponent({ year: '2019 - 2020' });

        const year = screen.getByText(`2019 - 2020 - ${textsPt.present}`);

        expect(year).toBeInTheDocument();
    });

    test('renders properly with isActive being false', () => {
        renderComponent({ isActive: false });

        const year = screen.getByText(baseProps.year);

        const presentText = screen.queryByText(textsPt.present);

        expect(year).toBeInTheDocument();

        expect(presentText).not.toBeInTheDocument();
    });

    test('renders properly with isInPartnership being false', () => {
        renderComponent({ isInPartnership: false });

        const isInPartership = screen.queryByText(`* ${textsPt.inPartnershipWith}`);

        expect(isInPartership).not.toBeInTheDocument();
    });

    test('renders properly with isGrid being false', () => {
        const { container } = renderComponent({ isGrid: false, isDesktop: false });

        expect(container).toMatchSnapshot();
    });

    test('renders properly when device is touch', () => {
        window.matchMedia = jest.fn().mockImplementation(() => ({
            matches: true,
        }));

        const { container } = renderComponent({ isDesktop: false });

        const wrapper = screen.getByTestId(projectItemTouchDivDataTestId);

        expect(wrapper).toHaveAttribute('data-times-touched', '0');

        fireEvent.touchStart(wrapper);

        expect(wrapper).toHaveAttribute('data-times-touched', '1');

        fireEvent.touchStart(wrapper);

        expect(wrapper).toHaveAttribute('data-times-touched', '1');

        expect(container).toMatchSnapshot();
    });
});
