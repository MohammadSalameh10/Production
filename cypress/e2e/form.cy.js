describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  it("happy path - Create Set Form", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("My New Set", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });
    cy.contains("My New Set").should("exist");
  });

  it("unhappy path - empty create set fields", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[type="submit"]').click({ force: true });
    });
    cy.contains("TITLE CANNOT BE EMPTY").should("exist");
  });

  it("happy path - Add Card Form", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("Set For Cards", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("Set For Cards").click();

    cy.get('[data-cy="card_form"]').within(() => {
      cy.get('input[name="termInput"]').type("Term 1", { force: true });
      cy.get('input[name="descriptionInput"]').type("Description 1", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("Term 1").should("exist");
  });

  it("unhappy path - empty add card fields", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("Empty Cards Set", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("Empty Cards Set").click();

    cy.get('[data-cy="card_form"]').within(() => {
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("exist");
  });
});
describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  it("happy path - Create Set Form", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("My New Set", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });
    cy.contains("My New Set").should("exist");
  });

  it("unhappy path - empty create set fields", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[type="submit"]').click({ force: true });
    });
    cy.contains("TITLE CANNOT BE EMPTY").should("exist");
  });

  it("happy path - Add Card Form", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("Set For Cards", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("Set For Cards").click();

    cy.get('[data-cy="card_form"]').within(() => {
      cy.get('input[name="termInput"]').type("Term 1", { force: true });
      cy.get('input[name="descriptionInput"]').type("Description 1", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("Term 1").should("exist");
  });

  it("unhappy path - empty add card fields", () => {
    cy.get('[data-cy="set_form"]').within(() => {
      cy.get('input[name="titleInput"]').type("Empty Cards Set", { force: true });
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("Empty Cards Set").click();

    cy.get('[data-cy="card_form"]').within(() => {
      cy.get('input[type="submit"]').click({ force: true });
    });

    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("exist");
  });
});
