describe("Forms", () => {
  beforeEach(() => {
    cy.viewport(1600, 1000);
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  it("happy path - Create Set Form", () => {
    cy.contains("Add New Set").click();

    cy.get('[data-cy="set_form"]').should("be.visible").within(() => {
      cy.get('input[name="titleInput"]').type("My New Set");
      cy.get('input[type="submit"]').click();
    });

    cy.contains("My New Set").should("exist");
  });

  it("unhappy path - empty create set fields", () => {
    cy.contains("Add New Set").click();

    cy.get('[data-cy="set_form"]').should("be.visible").within(() => {
      cy.get('input[type="submit"]').click();
    });

    cy.contains("TITLE CANNOT BE EMPTY").should("exist");
  });

  it("happy path - Add Card Form", () => {
    cy.contains("Add New Set").click();

    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("Set For Cards");
      cy.get('input[type="submit"]').click();
    });

    cy.contains("Set For Cards").click();

    cy.contains("Add New Card").click();

    cy.get('[data-cy="card_form"]').should("be.visible").within(() => {
      cy.get('input[name="termInput"]').type("Term 1");
      cy.get('input[name="descriptionInput"]').type("Description 1");
      cy.get('input[type="submit"]').click();
    });

    cy.contains("Term 1").should("exist");
  });

  it("unhappy path - empty add card fields", () => {
    cy.contains("Add New Set").click();

    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("Empty Cards Set");
      cy.get('input[type="submit"]').click();
    });

    cy.contains("Empty Cards Set").click();

    cy.contains("Add New Card").click();

    cy.get('[data-cy="card_form"]').should("be.visible").within(() => {
      cy.get('input[type="submit"]').click();
    });

    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("exist");
  });
});
