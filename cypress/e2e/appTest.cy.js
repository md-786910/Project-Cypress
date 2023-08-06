/// <referece types="cypress" />

it("should login to Goodreads", () => {
  cy.visit("https://www.goodreads.com/");

  cy.contains("Sign In").click();
  cy.url().should("include", "/user/sign_in");

  cy.contains("Sign in with email").click();
  // handle new page error when navigate
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  cy.get("#ap_email").type("mdashifreza111@gmail.com");
  cy.get("#ap_password").type("gh6ceUKMHU!58.u");

  cy.wait(1000);

  cy.get("#signInSubmit").click();
  // cy.get(".a-alert-heading").then((alertHeading) => {
  //   if (alertHeading) {
  //     console.log(alertHeading);
  //     // validate again password
  //     cy.get("#ap_password").type("gh6ceUKMHU!58.u");

  //     // validate captcha (if applicable)
  //     // cy.get("#signInSubmit").click();
  //   } else {
  //     cy.get("#signInSubmit").click();
  //   }
  // });

  cy.wait(1000);

  // search books
  const bookTitle = "The Great Gatsby";
  // Type the book title in the search bar and press Enter
  cy.get(
    ".siteHeader__contents > .searchBox > .searchBox__form > .searchBox__input"
  ).type(`${bookTitle}{enter}`);

  // for want to read
  cy.contains("Want to Read").should("exist").click();
  cy.wait(1000);

  // click my books
  cy.contains("My Books").should("exist").click({ force: true });
  // handle new page error when navigate
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  // delete single book
  cy.get(".smallText > img").click();

  // Logout menu
  cy.get(
    ".dropdown__trigger > .headerPersonalNav__icon > .circularIcon"
  ).click();

  cy.get(
    '.siteHeader__subNav > ul > [role="menuitem Sign out"] > .siteHeader__subNavLink'
  ).click();
});
