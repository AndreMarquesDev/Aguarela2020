import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Locale } from '../../types/Locale';
import { MockProviders } from '../../utils/jest/MockProviders';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { textsEn, textsPt } from '../../utils/texts';
import { Breakpoint } from '../../utils/useWindowSize';
import { ProjectsListDouble } from './ProjectsListDouble';
import '@testing-library/jest-dom';

const expectedNumberOfBlocksRendered = 13;
const expectedNumberOfSlidesRendered = expectedNumberOfBlocksRendered * 3; // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned', hence the triplication

const renderComponent = (language: Locale = Locale.Pt): RenderResult => {
    return render(
        <MockProviders language={language}>
            <ProjectsListDouble />
        </MockProviders>,
    );
};

describe('<ProjectsListDouble />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const title = screen.getByText(textsPt.projects);
        // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned', so each slide is triplicated
        const tjela = screen.getAllByAltText('tjela')[0];
        const tasteOfIndia = screen.getAllByAltText('taste of india')[0];
        const kaffeehaus = screen.getAllByAltText('kaffeehaus')[0];
        const avocado = screen.getAllByAltText('avocado')[0];
        const guacamole = screen.getAllByAltText('guacamole')[0];
        const mariaLimao = screen.getAllByAltText('marialimao')[0];
        const jameson = screen.getAllByAltText('jameson')[0];
        const beefeater = screen.getAllByAltText('beefeater')[0];
        const biergarten = screen.getAllByAltText('biergarten')[0];
        const madMary = screen.getAllByAltText('mad mary')[0];
        const bovine = screen.getAllByAltText('bovine')[0];
        const icecreamRoll = screen.getAllByAltText('icecream roll')[0];
        const riceMe = screen.getAllByAltText('rice me')[0];
        const riceMeDeli = screen.getAllByAltText('rice me deli')[0];
        const harpoon = screen.getAllByAltText('harpoon')[0];
        const catarinaSantiago = screen.getAllByAltText('catarina santiago')[0];
        const quatroPatasDeCincoEstrelas = screen.getAllByAltText('4 patas de 5 estrelas')[0];
        const luminous = screen.getAllByAltText('luminous')[0];
        const aAmigaEsteticista = screen.getAllByAltText('a amiga esteticista')[0];
        const AnaRo = screen.getAllByAltText('AnaRo')[0];

        const socialMediaAndContentCreationDescription = screen.getAllByText(
            textsPt.socialMediaAndContentCreation,
        );
        const socialMediaManagementDescription = screen.getAllByText(textsPt.socialMediaManagement);
        const contentCreationDescription = screen.getAllByText(textsPt.contentCreation);
        const socialMediaAndPaidSocialDescription = screen.getAllByText(
            textsPt.socialMediaAndPaidSocial,
        );
        const consultingAndContentCreationDescription = screen.getAllByText(
            textsPt.consultingAndContentCreation,
        );

        expect(title).toBeInTheDocument();
        expect(tjela).toBeInTheDocument();
        expect(tasteOfIndia).toBeInTheDocument();
        expect(kaffeehaus).toBeInTheDocument();
        expect(avocado).toBeInTheDocument();
        expect(guacamole).toBeInTheDocument();
        expect(mariaLimao).toBeInTheDocument();
        expect(jameson).toBeInTheDocument();
        expect(beefeater).toBeInTheDocument();
        expect(biergarten).toBeInTheDocument();
        expect(madMary).toBeInTheDocument();
        expect(bovine).toBeInTheDocument();
        expect(icecreamRoll).toBeInTheDocument();
        expect(riceMe).toBeInTheDocument();
        expect(riceMeDeli).toBeInTheDocument();
        expect(harpoon).toBeInTheDocument();
        expect(catarinaSantiago).toBeInTheDocument();
        expect(quatroPatasDeCincoEstrelas).toBeInTheDocument();
        expect(luminous).toBeInTheDocument();
        expect(aAmigaEsteticista).toBeInTheDocument();
        expect(AnaRo).toBeInTheDocument();

        expect(socialMediaAndContentCreationDescription).toHaveLength(
            expectedNumberOfSlidesRendered,
        );
        expect(socialMediaManagementDescription).toHaveLength(3 * 3);
        expect(contentCreationDescription).toHaveLength(1 * 3);
        expect(socialMediaAndPaidSocialDescription).toHaveLength(1 * 3);
        expect(consultingAndContentCreationDescription).toHaveLength(2 * 3);

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = renderComponent(Locale.En);

        const title = screen.getByText(textsEn.projects);

        expect(title).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on phablet', () => {
        setJestWindowWidth(Breakpoint.Phablet);

        const { container } = renderComponent();

        expect(container).toMatchSnapshot();
    });

    test('renders properly on mobile', () => {
        setJestWindowWidth(Breakpoint.Mobile);

        const { container } = renderComponent();

        expect(container).toMatchSnapshot();
    });
});
