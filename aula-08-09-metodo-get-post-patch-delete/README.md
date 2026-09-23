# API de Convidados 🎉

Este projeto consiste em uma API REST desenvolvida utilizando **NestJS** e **TypeScript**, criada para realizar o gerenciamento de convidados de um evento.

A aplicação possui operações para consultar, cadastrar, atualizar e remover convidados, utilizando uma estrutura organizada em **Controller, Service e DTO**.

---

## 📌 Sobre o projeto

A API foi desenvolvida como um projeto de estudo para praticar conceitos fundamentais do **NestJS**, como:

- Criação de Controllers e rotas HTTP;
- Injeção de dependências;
- Criação e utilização de Services;
- Utilização de DTOs para entrada de dados;
- Parâmetros de rota com `@Param`;
- Corpo da requisição com `@Body`;
- Métodos HTTP como `GET`, `POST`, `PATCH` e `DELETE`;
- Tratamento de erros utilizando `NotFoundException`;
- Organização e separação de responsabilidades;
- Manipulação de dados utilizando métodos de arrays do JavaScript/TypeScript.

Atualmente, os convidados são armazenados em memória através de um array dentro do Service. Portanto, os dados são perdidos quando a aplicação é reiniciada.


## 🛠️ Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **REST API**
- **HTTP**
- **JavaScript/TypeScript Array Methods**


 ### Service

 O `ConvidadosService` concentra a lógica relacionada aos convidados.

 Entre suas responsabilidades estão:

 - Armazenar a lista de convidados;
- Procurar um convidado pelo ID;
- Atualizar a idade;
- Remover um convidado;
- Retornar erros quando o convidado não é encontrado.

 ### DTO

 O `CriarConvidadoDto` é utilizado para definir os dados necessários para cadastrar um novo convidado.

---

 ## 🚀 Funcionalidades

 ### 📋 Listar convidados

 Retorna todos os convidados cadastrados.

 **Método:**

```
GET /convidado
```

 Exemplo de resposta:

```
[
  {
    "id": 1,
    "nome": "Rebeca",
    "idade": 20
  },
  {
    "id": 2,
    "nome": "Leonardo",
    "idade": 18
  },
  {
    "id": 3,
    "nome": "Sergio",
    "idade": 18
  }
]
```

---

 ### ➕ Cadastrar convidado

 Permite adicionar um novo convidado através de uma requisição `POST`.

 **Método:**

```
POST /convidado
```

 Exemplo de requisição:

```
{
  "nome": "João",
  "idade": 25
}
```

 A aplicação recebe os dados através do `@Body()` e realiza o processamento do novo convidado.

---

 ### ✏️ Atualizar idade

 Permite alterar a idade de um convidado utilizando seu ID.

 **Método:**

```
PATCH /convidado/:id
```

 Exemplo:

```
PATCH /convidado/1
```

 Body:

```
{
  "idade": 21
}
```

 O Service procura o convidado através do ID e atualiza sua idade.

---

 ### 🗑️ Remover convidado

 Remove um convidado utilizando seu ID.

 **Método:**

```
DELETE /convidado/:id
```

 Exemplo:

```
DELETE /convidado/3
```

 Quando a operação é realizada com sucesso, a API retorna o status HTTP:

```
204 No Content
```

---

 ## ⚠️ Tratamento de erros

 A aplicação utiliza o `NotFoundException` do NestJS para informar quando um convidado não existe.

 Por exemplo, ao tentar buscar ou atualizar um convidado com um ID inexistente:

```
[ADMINISTRADOR] Convidado com ID 10 não encontrado!
```

 Esse tratamento evita que a aplicação tente manipular um registro que não existe.

---

 ## 🧠 Conceitos praticados

 Este projeto foi desenvolvido com o objetivo de colocar em prática conceitos importantes do desenvolvimento de APIs com NestJS.

 ### Injeção de dependência

 O `ConvidadosService` é injetado no Controller através do construtor:

```
constructor(
  private readonly convidadoService: ConvidadosService
) {}
```

 Dessa forma, o Controller pode utilizar os métodos do Service sem precisar criar manualmente uma nova instância.

 ### Separação de responsabilidades

 O projeto separa as responsabilidades entre as diferentes camadas:

 **Controller → recebe as requisições**

 **Service → executa as regras e operações**

 **DTO → define os dados recebidos**

 Essa organização facilita a manutenção e evolução da aplicação.

---

 ## 🔎 Exemplos de rotas

 | Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/convidado` | Lista todos os convidados |
| `POST` | `/convidado` | Cadastra um novo convidado |
| `PATCH` | `/convidado/:id` | Atualiza a idade |
| `DELETE` | `/convidado/:id` | Remove um convidado |

---

 ## ▶️ Como executar o projeto

 Primeiro, instale as dependências:

```
npm install
```

 Depois, execute a aplicação em modo de desenvolvimento:

```
npm run start:dev
```

 A API ficará disponível localmente na porta configurada pelo projeto.

 Por padrão:

```
http://localhost:3000
```

---

 ## 🧪 Testando a API

 As requisições podem ser testadas utilizando ferramentas como:

 - Insomnia
- Postman
- Thunder Client
- Extensão REST Client do VS Code

 Também é possível testar diretamente através de ferramentas de linha de comando, como o `curl`.

---

 ## 📚 Objetivo do projeto

 Este projeto tem como principal objetivo servir como prática no desenvolvimento de APIs utilizando **NestJS**, permitindo compreender desde a criação das rotas até a organização da lógica de negócio em Services.

 A implementação pode ser posteriormente expandida com recursos como:

 - Banco de dados;
- TypeORM ou Prisma;
- Validação de dados;
- Autenticação;
- Documentação com Swagger;
- Testes unitários e de integração;
- Paginação;
- Filtros e busca de convidados.

---

 ## 👨‍💻 Desenvolvimento

 Projeto desenvolvido para fins de estudo e prática com **NestJS, TypeScript e desenvolvimento de APIs REST**.

```

Esse formato deixa o README com cara de **projeto de portfólio**, porque não apenas mostra o código, mas também explica **o que a API faz, como ela está estruturada e como utilizá-la**.
```
