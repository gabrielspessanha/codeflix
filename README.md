# API Codeflix
Está api é utilizada para fornecer dados para parte de front-end, validar dados e fonercer comunicação com banco de dados.
## EndPoints
### POST /auth/register
Esse endpoint é responsavel por cadastrar novos usuários na aplicação verificando se o usuário já existe no banco de dados.
#### Parametros
firstname : Primeiro nome do usuário 
lastname : Sobrenome do usuário 
email : E-mail do usuário
password : Password do usuário
birth : Data de aniversário  do usuário
phone : Número de telefone do usuário
#### Respostas
##### OK: 201
Caso essa respota aconteça ele irá retornar as informações do usuário cadastrado.
EXEMPLO:
  ```
  {
    "id": 25,
    "birth": "1995-09-02T00:00:00.000Z",
    "email": "john@email.com",
    "firstName": "Lucas",
    "lastName": "Doe",
    "password": "$2b$10$S4IMvHzkk/GN2boxJAxXWuF5Q3.2hvNUtO2nIa1pbVYPhRF9dEm.m",
    "phone": "22996057593",
    "role": "user",
    "updatedAt": "2024-03-21T12:46:04.961Z",
    "createdAt": "2024-03-21T12:46:04.961Z"
  }
```

##### Falha ao cadastrar usuário! 400
Caso dê algum erro ele retorna um objeto que tem o parametro message informado o motivo do erro.

Quando já possue um email cadastrado:
EXEMPLO:
  ```
  {
    "message": "Este email já está cadastrado."
  }
  ```
Outros erros:
EXEMPLO:
  ```
    {
      "message": "notNull Violation: users.password cannot be null"
    }
  ```
---------------------------------------------------------------------------------

### POST /auth/login
Esse endpoint é responsavel por pegar seus dados como email e senha cadastrados e efetuar login
#### Parametros
email : E-mail do usuário
password : Password do usuário
EXEMPLO:
  ```
  {
    "email": "john@gmail.com",
    "password": "exemplosenha"
  }
  ```
#### Respostas
##### OK: 201
Caso Login seja efetuado com sucesso, ele irá retornar as informações do usuário logado.
EXEMPLO:
  ```
  {
    "authenticated": true,
    "id": 26,
    "fisrtName": "Lucas",
    "email": "john@gmail.com",
    "token": "TokenDousuário..."
  }
  ```

##### Usuário não encontrado! 404
Caso dê algum erro ele retorna uma mensagem informando que o email não foi cadastrado

Quando já possue um email cadastrado:
EXEMPLO:
  ```
  {
    "message": "Este email já está cadastrado."
  }
  ```
Outros erros:
EXEMPLO:
  ```
    {
      "message": "notNull Violation: users.password cannot be null"
    }
  ```