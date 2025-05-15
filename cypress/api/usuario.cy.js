const faker = require('faker-br');

let username = faker.name.firstName();
let email = faker.internet.email();
let password = faker.internet.password();
let newEmail = faker.internet.email();
let idUser
describe("Cadastro de usuário", () => {
  let user
  it("Listar usuários – GET /usuarios", () => {
    cy.api({
      method: "GET",
      url: "/usuarios",
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      user = response.body.usuarios[0]._id;
      cy.log(user);

      cy.validateSchema("usuarios.schema.json", response.body);
    });
  });

it("listar usuário por id – GET /usuarios/:id", () => {
    cy.api({
      method: "GET",
      url: `/usuarios/${user}`,
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body._id).to.eq(user);
      cy.validateSchema("usuarioById.schema.json", response.body);
    });
  }
  );

it("Cadastro usuário com sucesso  – POST /usuarios", () => {
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
        idUser = response.body._id
        expect(response.status).to.eq(201);
        cy.validateSchema("usuarioCadastro.schema.json", response.body);
      })
    })

it("Cadastro com email já existente  – PUT /usuarios", () => {
    cy.api({
      method: "POST",
      url: "/usuarios",
      body: {
        nome: username,
        email: email,
        password: password,
        administrador: "true",
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("Este email já está sendo usado");
      })
    })    

it("Editar usuário já existente  – PUT /usuarios", () => {
    cy.api({
      method: "PUT",
      url: `/usuarios/${idUser}`,
      body: {
        nome: username,
        email: newEmail,
        password: password,
        administrador: "true",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Registro alterado com sucesso");
      })
    })    



it("Excluir usuário já existente – DELETE /usuarios", () => {
    cy.api({
      method: "DELETE",
      url: `/usuarios/${idUser}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("Registro excluído com sucesso");
      })
    })     
});
