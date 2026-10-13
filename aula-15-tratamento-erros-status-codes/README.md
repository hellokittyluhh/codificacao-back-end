# 📚 Aula 15 - Tratamento de Erros e Status Codes

Neste projeto realizado durante a **Aula 15**, pratiquei conceitos fundamentais do **NestJS**, trabalhando com organização de módulos, controllers, services, injeção de dependências e criação de uma lista de produtos.

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript

## 📂 Estrutura do projeto

Durante a aula, trabalhamos principalmente com:

- `main.ts`
- `app.module.ts`
- `app.controller.ts`
- `produtos.service.ts`
- `produtos.controller.ts`

## 🧩 O que foi desenvolvido

### 🔹 Inicialização da aplicação

No arquivo `main.ts`, foi realizada a configuração inicial da aplicação NestJS utilizando o `NestFactory`.
```

async function bootstrap() { const app = await NestFactory.create(AppModule); await app.listen(process.env.PORT ?? 3000); }

await bootstrap();

```

A aplicação é iniciada na porta `3000`, caso nenhuma outra porta seja definida através da variável de ambiente `PORT`.

---

### 🔹 ProdutosService

Foi criado o `ProdutosService` utilizando o decorator `@Injectable()`.

Nesse service foi criada uma lista de produtos contendo:

- Arroz Namorados
- Feijão Tio Bira
- Macarrão Galo
- Açúcar União
- Sal Lebre

Cada produto possui:

- `id`
- `nome`
- `preco`

Exemplo:
```

@Injectable() export class ProdutosService { produtos = \[ { id: 1, nome: "Arroz Namorados", preco: 9.99 }, { id: 2, nome: "Feijão Timbiras", preco: 9.99 }, { id: 3, nome: "Macarrão Galo", preco: 7.99 }, { id: 4, nome: "Açúcar União", preco: 4.99 }, { id: 5, nome: "Sal Lebre", preco: 2.99 }, \];

listarProdutos() { return this.produtos; } }

```

O método `listarProdutos()` retorna a lista de produtos cadastrados.

---

### 🔹 Injeção de dependência

Também foi praticada a **injeção de dependência** do NestJS.

O `ProdutosService` foi registrado no `AppModule`:
```

@Module({ imports: \[\], controllers: \[AppController, ProdutosController\], providers: \[AppService, ProdutosService\], }) export class AppModule {}

```

Dessa forma, o NestJS consegue disponibilizar o service para ser utilizado pelos controllers.

---

### 🔹 AppController

O `AppController` utiliza o `AppService` através da injeção de dependência:
```

@Controller() export class AppController { constructor(private readonly appService: AppService) {}

@Get() getHello(): string { return this.appService.getHello(); } }

```

O decorator `@Get()` define uma rota HTTP do tipo **GET**.

---

## 📌 Conceitos aprendidos

Durante a Aula 15, pratiquei:

- ✅ Estrutura básica de uma aplicação NestJS
- ✅ Controllers
- ✅ Services
- ✅ Modules
- ✅ Decorators
- ✅ Injeção de dependência
- ✅ Rotas HTTP com `@Get()`
- ✅ Organização de responsabilidades entre Controller e Service
- ✅ Criação e retorno de dados através de um Service
- ✅ Configuração da porta da aplicação
- ✅ Introdução ao tratamento de erros e status codes

## ▶️ Como executar o projeto

Clone o repositório:
```

git clone \<URL_DO_REPOSITORIO\>

```

Entre na pasta do projeto:
```

cd aula-15-tratamento-erros-status-codes

```

Instale as dependências:
```

npm install

```

Execute a aplicação:
```

npm run start:dev

```

A aplicação estará disponível em:
```

http://localhost:3000

```

## 🎯 Objetivo da aula

O objetivo desta aula foi continuar a prática com **NestJS**, entendendo melhor como estruturar uma aplicação utilizando **Modules, Controllers e Services**, além de trabalhar com requisições HTTP e preparação da aplicação para o tratamento de erros e códigos de status.

---

📖 **Aula 15 - Estudos de NestJS**

💻 Projeto desenvolvido para fins de aprendizado.
```