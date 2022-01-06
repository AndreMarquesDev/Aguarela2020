// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    interface Chainable {
        getByDataTestId(selector: string): Chainable<Element>;
        getByText(parent: string, text: string): Chainable<Element>;
        imageIsVisible(dataTestId: string, selector: string): Chainable<Element>;
        imageWidthIs(dataTestId: string, selector: string, width: number): Chainable<Element>;
        imageHeightIs(dataTestId: string, selector: string, height: number): Chainable<Element>;
        isHidden(parent: string, selector: string): Chainable<Element>;
        isVisible(parent: string, selector: string): Chainable<Element>;
        urlIsEqualTo(url: string): Chainable<Element>;
        forceHover(): Chainable<Element>;
    }
}

Cypress.Commands.add('getByDataTestId', selector => {
    cy.get(`[data-testid="${selector}"]`);
});

Cypress.Commands.add('getByText', (parent, text) => {
    cy.getByDataTestId(parent).contains(text);
});

Cypress.Commands.add('imageIsVisible', (dataTestId, selector) => {
    cy.getByDataTestId(dataTestId)
        .find(`img[alt="${selector}"]`)
        .should('be.visible')
        .and($img => {
            expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
        });
});

Cypress.Commands.add('imageWidthIs', (dataTestId, selector, width) => {
    cy.getByDataTestId(dataTestId)
        .find(`img[alt="${selector}"]`)
        .and($img => {
            expect(($img[0] as HTMLImageElement).scrollWidth).to.equal(width);
        });
});

Cypress.Commands.add('imageHeightIs', (dataTestId, selector, height) => {
    cy.getByDataTestId(dataTestId)
        .find(`img[alt="${selector}"]`)
        .and($img => {
            expect(($img[0] as HTMLImageElement).scrollHeight).to.equal(height);
        });
});

Cypress.Commands.add('isHidden', (parent, selector) => {
    cy.getByText(parent, selector).should('be.hidden');
});

Cypress.Commands.add('isVisible', (parent, selector) => {
    cy.getByText(parent, selector).should('be.visible');
});

Cypress.Commands.add('urlIsEqualTo', url => {
    cy.url().should('eq', url);
});

Cypress.Commands.add('forceHover', { prevSubject: true }, subject => {
    cy.wrap(subject).invoke('show');
});
