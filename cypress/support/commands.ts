// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    interface Chainable {
        imageIsVisible(parent: string, selector: string): Chainable<Element>;
    }
}

Cypress.Commands.add('imageIsVisible', (parent, selector) => {
    cy.get(`${parent} img[alt="${selector}"]`)
        .should('be.visible')
        .and($img => {
            expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
        });
});
