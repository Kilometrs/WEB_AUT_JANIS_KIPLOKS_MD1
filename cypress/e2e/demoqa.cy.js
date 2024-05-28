import { SelectablePage } from "../pageObjects/selectablePage";

describe("Demoqa scenarios", () => {
    context("MD1", () => {
        it("Click items and validate", () => {
            SelectablePage.visit();
            SelectablePage.gridTab.click();

            const activeElements = ["Two", "Four", "Six", "Eight"];
            const inactiveElements = ["One", "Three", "Five", "Seven"];

            activeElements.forEach((element) => {
                SelectablePage.gridContainerListElements.contains(element).click()
                    .should('have.class', 'active');
            });

            inactiveElements.forEach((element) => {
                SelectablePage.gridContainerListElements.contains(element)
                    .should('not.have.class', 'active');
            });

        });
    });
});