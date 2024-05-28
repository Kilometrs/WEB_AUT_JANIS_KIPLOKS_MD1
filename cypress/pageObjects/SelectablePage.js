import { BasePage } from './basePage';

export class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get gridTab() {
        return cy.get('[id="demo-tab-grid"]');
    }

    static get gridContainerListElements() {
        return cy.get('#gridContainer li');
    }

}