import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { textsPt, textsEn } from '../../utils/texts';
import { TextsContext } from '../context/TextsContext';
import { setJestWindowWidth } from '../../utils/jest/setJestWindowWidth';
import { ProjectsListDouble } from './ProjectsListDouble';
import { Breakpoint } from '../../utils/useWindowSize';

const renderComponent = (): RenderResult => {
    return render(<ProjectsListDouble />);
};

describe('<ProjectsListDouble />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const title = screen.getByText(textsPt.projects);
        const tjela = screen.getByAltText('tjela');
        const tasteOfIndia = screen.getByAltText('taste of india');
        const kaffeehaus = screen.getByAltText('kaffeehaus');
        const avocado = screen.getByAltText('avocado');
        const guacamole = screen.getByAltText('guacamole');
        const mariaLimao = screen.getByAltText('marialimao');
        const jameson = screen.getByAltText('jameson');
        const beefeater = screen.getByAltText('beefeater');
        const biergarten = screen.getByAltText('biergarten');
        const madMary = screen.getByAltText('mad mary');
        const bovine = screen.getByAltText('bovine');
        const icecreamRoll = screen.getByAltText('icecream roll');
        const riceMe = screen.getByAltText('rice me');
        const riceMeDeli = screen.getByAltText('rice me deli');
        const harpoon = screen.getByAltText('harpoon');
        const catarinaSantiago = screen.getByAltText('catarina santiago');
        const quatroPatasDeCincoEstrelas = screen.getByAltText('4 patas de 5 estrelas');
        const luminous = screen.getByAltText('luminous');
        const aAmigaEsteticista = screen.getByAltText('a amiga esteticista');
        const AnaRo = screen.getByAltText('AnaRo');

        const socialMediaAndContentCreationDescription = screen.getAllByText(
            textsPt.socialMediaAndContentCreation
        );
        const socialMediaManagementDescription = screen.getAllByText(textsPt.socialMediaManagement);
        const contentCreationDescription = screen.getAllByText(textsPt.contentCreation);
        const socialMediaAndPaidSocialDescription = screen.getAllByText(
            textsPt.socialMediaAndPaidSocial
        );
        const consultingAndContentCreationDescription = screen.getAllByText(
            textsPt.consultingAndContentCreation
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

        expect(socialMediaAndContentCreationDescription.length).toBe(13);
        expect(socialMediaManagementDescription.length).toBe(3);
        expect(contentCreationDescription.length).toBe(1);
        expect(socialMediaAndPaidSocialDescription.length).toBe(1);
        expect(consultingAndContentCreationDescription.length).toBe(2);

        expect(container).toMatchSnapshot();
    });

    test('renders properly in English', () => {
        const { container } = render(
            <TextsContext.Provider
                value={{
                    texts: textsEn,
                }}
            >
                <ProjectsListDouble />
            </TextsContext.Provider>
        );

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
