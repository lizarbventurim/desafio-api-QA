# desafio-api-QA

## Instalação e Execução do Projeto

### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafio-api-QA.git

2. Navegue até o diretório do projeto:
   ```bash
   cd desafio-api-QA
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

Executando os Testes

1. Para executar os testes, use o seguinte comando:
   ```bash
   npm run test
   ```

 2. Para abrir o Cypress e executar os testes manualmente, use:
   ```bash
   npm run cypress:open
   ```  



## [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api)

Plug-in Cypress para testes de API eficazes. Imagine Postman, mas em Cypress. Imprime informações sobre a chamada de API na interface do usuário do aplicativo Cypress.

## [Ajv JSON schema validator](https://www.npmjs.com/package/ajv)

O validador JSON mais rápido para Node.js e navegador.


✅ Cenários de Teste – Serverest API

### 1. Login de usuário – POST /login

- **Cenário 1** – Login com sucesso (usuário válido)
  - Pré-condição: Usuário já cadastrado.
  - Validação:
    - Status 200
    - Mensagem: "Login realizado com sucesso"

- **Cenário 2** – Login com dados inválidos
  - Entrada com email ou senha incorretos.
  - Validação:
    - Status 401
    - Mensagem de erro: "Email e/ou senha inválidos"

- **Cenário 3** – Login com campos obrigatórios faltando
  - Entrada sem email ou password.
  - Validação:
    - Status 400
    - Mensagem de erro apropriada

---

### 2. Cadastro de usuário

- **Cenário 1** – Listar usuários – GET /usuarios
  - Listar todos os usuários cadastrados.
  - Validação:
    - Status 200
    - Validação do schema de resposta

- **Cenário 2** – Listar usuário por ID – GET /usuarios/:id
  - Entrada com ID de usuário existente.
  - Validação:
    - Status 200
    - Validação do schema de resposta

- **Cenário 3** – Cadastro de usuário com sucesso
  - Entrada válida com nome, email, senha, administrador: "true".
  - Validação:
    - Status 201
    - Mensagem: "Cadastro realizado com sucesso"

- **Cenário 4** – Cadastro com email já existente
  - Validação:
    - Status 400
    - Mensagem: "Este email já está sendo usado"

- **Cenário 5** – Editar usuário já existente
  - Entrada com ID de usuário existente.
  - Validação:
    - Status 200
    - Mensagem: "Registro alterado com sucesso"

- **Cenário 6** – Excluir usuário já existente
  - Entrada com ID de usuário existente.
  - Validação:
    - Status 200
    - Mensagem: "Registro excluído com sucesso"

---

### 3. Cadastro de produto

- **Cenário 1** – Listar produtos – GET /produtos
  - Listar todos os produtos cadastrados.
  - Validação:
    - Status 200
    - Validação do schema de resposta

- **Cenário 2** – Listar produto por ID – GET /produtos/:id
  - Entrada com ID de produto existente.
  - Validação:
    - Status 200
    - Validação do schema de resposta

- **Cenário 3** – Cadastro de produto com sucesso
  - Entrada válida com nome, preco, descricao, quantidade.
  - Validação:
    - Status 201
    - Mensagem: "Cadastro realizado com sucesso"

- **Cenário 4** – Editar produto já existente
  - Entrada com ID de produto existente.
  - Validação:
    - Status 200
    - Mensagem: "Registro alterado com sucesso"

- **Cenário 5** – Excluir produto já existente
  - Entrada com ID de produto existente.
  - Validação:
    - Status 200
    - Mensagem: "Registro excluído com sucesso"

---

### 4. Carrinhos

- **Cenário 1** – Listar carrinhos – GET /carrinhos
  - Listar todos os carrinhos cadastrados.
  - Validação:
    - Status 200
    - Validação do schema de resposta

- **Cenário 2** – Listar carrinho por ID – GET /carrinhos/:id
  - Entrada com ID de carrinho existente.
  - Validação:
    - Status 200
    - Validação do schema de resposta

- **Cenário 3** – Cadastro de carrinho com sucesso
  - Entrada válida com ID de produto, ID de usuário.
  - Validação:
    - Status 201
    - Mensagem: "Cadastro realizado com sucesso"

- **Cenário 4** – Excluir carrinho
  - Entrada com ID de carrinho existente.
  - Validação:
    - Status 200
    - Mensagem: "Registro excluído com sucesso"

- **Cenário 5** – Excluir carrinho e retornar produtos para o estoque
  - Entrada com ID de carrinho existente.
  - Validação:
    - Status 200
    - Mensagem: "Registro excluído com sucesso"
    - Validação do estoque do produto


