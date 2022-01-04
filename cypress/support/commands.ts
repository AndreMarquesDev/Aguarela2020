// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    interface Chainable {
        getByDataTestId(selector: string): Chainable<Element>;
        getByText(parent: string, text: string): Chainable<Element>;
        imageIsVisible(dataTestId: string, selector: string): Chainable<Element>;
        isHidden(parent: string, selector: string): Chainable<Element>;
        isVisible(parent: string, selector: string): Chainable<Element>;
        forceHover(): Chainable<Element>;
    }
}

Cypress.Commands.add('getByDataTestId', selector => {
    cy.get(`[data-testid="${selector}"]`);
});

Cypress.Commands.add('getByText', (parent, text) => {
    cy.getByDataTestId(parent).contains(text);
});

Cypress.Commands.add('imageIsVisible', (parent, selector) => {
    cy.getByDataTestId(parent)
        .find(`img[alt="${selector}"]`)
        .should('be.visible')
        .and($img => {
            expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
        });
});

Cypress.Commands.add('isHidden', (parent, selector) => {
    cy.getByText(parent, selector).should('be.hidden');
});

Cypress.Commands.add('isVisible', (parent, selector) => {
    cy.getByText(parent, selector).should('be.visible');
});

Cypress.Commands.add('forceHover', { prevSubject: true }, subject => {
    cy.wrap(subject).invoke('show');
});
