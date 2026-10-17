Aula 17 — Documentação Técnica com Swagger e NestJS
📚 Sobre a aula

Nesta aula, desenvolvemos uma API REST utilizando NestJS e implementamos a documentação técnica com Swagger. O objetivo é facilitar a visualização, a compreensão e os testes dos endpoints da aplicação.

O projeto simula uma API de estoque de alimentos, com um endpoint para cadastrar produtos e documentação dos dados de entrada e das respostas da API.

🎯 Objetivos
Configurar o Swagger em uma aplicação NestJS.
Documentar endpoints com decorators.
Descrever os dados de entrada utilizando DTOs (Data Transfer Objects).
Documentar exemplos, descrições e códigos de resposta HTTP.
Disponibilizar uma interface interativa para testar a API.
Configurar a autenticação Bearer na documentação.
🛠️ Tecnologias utilizadas
Node.js
NestJS
TypeScript
Swagger / OpenAPI
@nestjs/swagger
📁 Estrutura do projeto
src/
├── produtos/
│   ├── dto/
│   │   └── criar-produto.dto.ts
│   └── produto.controller.ts
├── app.controller.spec.ts
├── app.module.ts
└── main.ts

Descrição dos arquivos
main.ts: inicializa a aplicação e configura a documentação Swagger.
app.module.ts: módulo principal da aplicação.
produto.controller.ts: define o endpoint responsável pelo cadastro de produtos.
criar-produto.dto.ts: descreve os dados necessários para cadastrar um produto.
app.controller.spec.ts: arquivo relacionado aos testes do controller principal.
📦 DTO de criação de produto

O arquivo criar-produto.dto.ts define os campos utilizados no cadastro de produtos:

Campo	Tipo	Descrição	Exemplo
nome	string	Nome comercial do produto	Café Grão de Ouro 500g
preco	number	Preço unitário do produto	9.99
categoria	string	Categoria do produto	Alimentos

Os decorators @ApiProperty() permitem adicionar exemplos e descrições aos campos, tornando a documentação mais clara.

🚀 Configuração do Swagger

No arquivo main.ts, utilizamos DocumentBuilder para configurar as informações da API.

A documentação inclui:

Título: API de Estoque de Alimentos
Descrição: Documentação técnica interativa para integração
Versão: 1.0
Tag: produtos
Autenticação: Bearer Auth

O Swagger é disponibilizado no caminho /docs.

📝 Endpoint de cadastro de produtos

O controller produto.controller.ts utiliza decorators do NestJS e do Swagger para documentar o endpoint de criação de produtos.

POST /produtos

Objetivo: cadastrar um novo produto no estoque.

Corpo da requisição:

{
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos"
}

Resposta de sucesso — HTTP 201

Exemplo ilustrativo da resposta implementada no controller:

{
  "id": 67,
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos",
  "criadoEm": "16/10/2026"
}


O controller apresentado na aula gera o identificador 67 e o campo criadoEm com a data atual. Esses valores são exemplos de uma implementação didática, não de um banco de dados persistente.

Resposta de erro — HTTP 400

A documentação também descreve o código 400 Bad Request, associado a dados mal formatados ou inválidos enviados na requisição.

Observação: documentar uma resposta com @ApiResponse() não implementa automaticamente a validação dos dados. Para validar os campos, é necessário configurar os mecanismos de validação do NestJS.
▶️ Como executar o projeto
1. Instale as dependências
npm install

2. Instale o Swagger, caso ainda não esteja instalado
npm install @nestjs/swagger

3. Inicie a aplicação

Em um projeto NestJS com o script de desenvolvimento padrão:

npm run start:dev

4. Acesse a documentação

Com a aplicação em execução, abra:

http://localhost:3000/docs

Na interface do Swagger, é possível consultar o endpoint POST /produtos, visualizar o DTO e testar a requisição.

🔐 Autenticação Bearer

A configuração addBearerAuth() adiciona o esquema de autenticação Bearer à documentação do Swagger.

Para que o botão Authorize funcione como esperado, o endpoint ou os endpoints protegidos também precisam estar configurados para exigir autenticação na aplicação.

A configuração do Swagger, por si só, não implementa um sistema de autenticação nem protege automaticamente as rotas.

📖 Principais decorators utilizados
Decorator	Finalidade
@ApiTags()	Agrupa endpoints por