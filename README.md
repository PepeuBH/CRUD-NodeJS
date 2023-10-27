# CRUD com NodeJS
**🚀 Sumário**

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Configuração](#configuracao)
- [Rotas](#rotas)
- [Contato](#contato)

## <a id="funcionalidades"></a> ✨ Funcionalidades

O Sistema possui as seguintes funcionalidades principais:

- Criar um Usuário

- Listar todos os Usuários

- Listar um Usuário específico

- Alterar as informações de um Usuário já existente

- Deletar um Usuário

## <a id="tecnologias"></a> 👨‍💻 Tecnologias Utilizadas

- NodeJs

- Javascript

- PostgreSQL

- Git & Github

- Insomnia/Postman/Thund Client (Extensão para API no VSCode)


## <a id="requisitos"></a>🔨 Requisitos

- Possuir ``NodeJs``, ``NPM`` , ``Git Bash``, ``Visual Studio Code`` e ``PostgreSQL`` instalados no computador

- (Opcional) Possuir ``Postman/Insomnia`` instalados para consultar as rotas separadamente.

- (Opcional) No VSCode, instalar a extensão Thunder Client para acessar as rotas sem os programas listados acima.
## <a id="configuracao"></a>⚙️ Configuração

Siga as etapas abaixo para configurar o projeto em seu ambiente local:

1. **Clone o repositório do GitHub:**
```nodejs
git clone git@github.com:PepeuBH/CRUD-NodeJS.git
```

2. **Acesse a pasta backend**
```nodejs
cd backend/
```

3. **Instale as dependências do projeto:**
```nodejs
npm install
```

4. **Configurar o PostgreSQL:**
- Criar uma Database
- Configurar o arquivo Knexfile: no ambiente de "development":

```nodejs
development: {
    client: "pg",
    connection: {
      database: "NOME_DA_SUA_DATABASE",
      user: "SEU_USUARIO",
      password: "SENHA_PARA_ACESSO",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
  },
```

5. **Execute as migrations:**
```nodejs
npx knex migrate:latest
```


6. **Executar o programa**<br>
```nodejs
npm start
```


## <a id="rotas"></a>🚚 Rotas


A API possui as seguintes rotas disponíveis:

- **`GET`** **`http://localhost:3333/users`**: Rota responsável por listar todos os Usuários criados

##### RESPONSE

```JSON
[
  {
    "id": 15,
    "name": "Pedro Talma",
    "email": "pedrotoledo1717@gmail.com",
    "password": "pedro123123"
  },
  {
    "id": 16,
    "name": "Ekko",
    "email": "ekkinho@gmail.com",
    "password": "EkkoFoda"
  }
]
```

- **`GET`** **`http://localhost:3333/user/id`**: Rota responsável por listar um Usuário específico, recebendo por parâmetro o ID do mesmo

##### RESPONSE

```JSON
  {
    "id": 15,
    "name": "Pedro Talma",
    "email": "pedrotoledo1717@gmail.com",
    "password": "pedro123123"
  }
```


- **`POST`** **`http://localhost:3333/newuser`**: Rota responsável por criar um novo Usuário a partir de um objeto JSON

##### RESQUEST

```JSON
{
	"name": "Joao",
	"email": "joao@gmail.com",
	"password": "joao123senha"
}
```

- **`PUT`** **`http://localhost:3333/user/id`**: Rota responsável por alterar informações de cadastro de um Usuário, recebendo por parâmetro o ID do mesmo. No body pode ser enviado qualquer uma das informações que deseja alterar (name || email || password)

##### RESQUEST

```JSON
{
	"name": "OutroNome"
}
```

- **`DELETE`** **`http://localhost:3333/deleteuser/id`**: Rota responsável por deletar um Usuário, recebendo por parâmetro o ID do mesmo





## <a id="contato"></a>📧 Contato

Se você tiver alguma dúvida ou sugestão em relação a este projeto, entre em contato comigo pelo [Linkedin](https://www.linkedin.com/in/pedro-talma-toledo/)
