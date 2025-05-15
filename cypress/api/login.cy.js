const faker = require("faker-br");

describe("Login de usuário – POST /login", () => {
  let email = faker.internet.email();
  let password = faker.internet.password();
  let username = faker.name.firstName();

  const invalidPassword = Cypress.env("dados").invalidPassword;
  const passwordNull = "";

  before(() => {
    cy.api({
      method: "POST",
      url: "/usuarios",
      body: {
        nome: username,
        email: email,
        password: password,
        administrador: "true",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.validateSchema("usuarioCadastro.schema.json", response.body);
    });
  });

  it("Login com sucesso (usuário válido)", () => {
    cy.login(email, password).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("authorization");
      expect(response.body.authorization).to.be.not.empty;
    });
  });

  it("Login com sucesso (inválido)", () => {
    cy.login(email, invalidPassword).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.be.eq("Email e/ou senha inválidos");
    });
  });

  it("Login com dados inválidos)", () => {
    cy.login(email, passwordNull).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("password");
      expect(response.body.password).to.be.eq(
        "password não pode ficar em branco"
      );
    });
  });
});
