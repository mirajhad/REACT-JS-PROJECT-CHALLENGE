// inputForm.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("it has email input has placeholder enter your email", () => {
    cy.get("form")
      .find("input#email")
      .should("have.attr", "placeholder", "Enter Your Email");
  });

  it("it has password input has placeholder enter your email", () => {
    cy.get("form")
      .find("input#password")
      .should("have.attr", "placeholder", "Enter Your Password");
  });
});
