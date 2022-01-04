import { urls, selectors } from '../utils/selectors';

describe('homepage', () => {
    it('loads', () => {
        cy.visit('/');

        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('loads the english page by default', () => {
        cy.visit('http://localhost:3000/');

        cy.urlIsEqualTo(urls.en.homepage);
    });

    it('changes the language', () => {
        cy.visit('/');

        cy.get(selectors.generic.languageButton).click();

        cy.urlIsEqualTo(urls.en.homepage);
        cy.get(selectors.generic.languageButton).contains('pt');
    });

    it('changes to the about page and back to the homepage', () => {
        cy.visit('/');

        cy.get(selectors.links.about).click();

        cy.urlIsEqualTo(urls.pt.about);

        cy.get(selectors.links.homepage).click();

        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('changes to the projects page and back to the homepage', () => {
        cy.visit('/');

        cy.get(selectors.links.projects).click();

        cy.urlIsEqualTo(urls.pt.projects);

        cy.get(selectors.links.homepage).click();

        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('changes to the services page and back to the homepage', () => {
        cy.visit('/');

        cy.get(selectors.links.services).click();

        cy.urlIsEqualTo(urls.pt.services);

        cy.get(selectors.links.homepage).click();

        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('changes to the contact page and back to the homepage', () => {
        cy.visit('/');

        cy.get(selectors.links.contact).click();

        cy.urlIsEqualTo(urls.pt.contact);

        cy.get(selectors.links.homepage).click();

        cy.urlIsEqualTo(urls.pt.homepage);
    });

    it('changes to the projects page when clicking the "See more" button in the projects list', () => {
        cy.visit('/');

        cy.get(selectors.links.seeMoreProjects).click();

        cy.urlIsEqualTo(urls.pt.projects);
    });
});
