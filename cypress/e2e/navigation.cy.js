describe("Navigation menu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to Card Sets", () => {
    cy.get("#cardSetPage").click();
    cy.contains("Card Sets").should("be.visible");
  });

  it("navigates to About page", () => {
    cy.get("#aboutPage").click();
    cy.contains("About").should("be.visible");
  });

  it("navigates to Home page", () => {
    cy.get("#homePage").click();
    cy.contains("Home").should("be.visible");
  });
});
