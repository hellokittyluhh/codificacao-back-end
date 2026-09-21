# Aula 07 - Projeto NestJS

## 📚 Sobre a aula

Nesta aula foi desenvolvido um projeto utilizando o **NestJS**, um framework para construção de aplicações backend utilizando **Node.js** e **TypeScript**.

O objetivo principal foi compreender a estrutura inicial de um projeto NestJS, conhecer a organização dos arquivos e entender como os principais componentes do framework se relacionam.


## 🎯 Objetivos

Durante a aula, foram trabalhados os seguintes objetivos:

- Criar e configurar um projeto utilizando NestJS;
- Conhecer a estrutura de pastas de uma aplicação NestJS;
- Compreender o funcionamento de **Modules, Controllers e Services**;
- Utilizar o **TypeScript** na construção da aplicação;
- Criar um serviço utilizando o decorator `@Injectable()`;
- Criar um método para retornar uma mensagem;
- Executar e testar a aplicação no ambiente local;
- Conhecer a importância da organização e separação de responsabilidades no backend.

---

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **npm**
- **Visual Studio Code**

---

## 📁 Estrutura do projeto

O projeto possui uma estrutura organizada para facilitar o desenvolvimento da aplicação:

```text
aula-07-projeto-nestjs/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
````

 ### Principais arquivos

 **`app.controller.ts`**

 Responsável por receber as requisições e definir as rotas da aplicação.

 **`app.service.ts`**

 Contém a lógica de serviço da aplicação. Nesta aula, foi criado o método `getHello()`.

 **`app.module.ts`**

 É o módulo principal da aplicação, responsável por organizar e registrar os componentes utilizados pelo projeto.

 **`main.ts`**

 É o arquivo responsável por iniciar a aplicação NestJS.

---

 ## 💻 Desenvolvimento do Service

 Durante a aula, foi trabalhado o arquivo `app.service.ts`.

 O serviço foi criado utilizando o decorator `@Injectable()`:

```
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Servidor Nest JS Ativo[Aula 07]';
  }
}
```

 ### 🔎 Entendendo o código

 O `@Injectable()` informa ao NestJS que a classe pode ser gerenciada pelo sistema de **injeção de dependências** do framework.

 A classe `AppService` possui o método:

```
getHello(): string
```

 Esse método retorna uma `string` informando que o servidor NestJS está ativo:

```
Servidor Nest JS Ativo[Aula 07]
```

---

 ## 🧩 Arquitetura do NestJS

 O NestJS trabalha com uma arquitetura organizada em diferentes responsabilidades.

 ### Controller

 O **Controller** é responsável por lidar com as requisições HTTP e definir as rotas que poderão ser acessadas pelo cliente.

 ### Service

 O **Service** concentra a lógica da aplicação. Ele pode ser utilizado pelo Controller para executar determinadas operações.

 ### Module

 O **Module** organiza os componentes da aplicação, permitindo que Controllers, Services e outros recursos sejam agrupados.

 Essa separação facilita a manutenção, organização e evolução do projeto.

---

 ## 🖥️ Execução do projeto

 Para executar o projeto, é necessário instalar as dependências e iniciar o servidor.

 Instalação das dependências:

```
npm install
```

 Para executar o projeto em modo de desenvolvimento:

```
npm run start:dev
```

 Após iniciar o servidor, a aplicação pode ser acessada localmente pelo navegador ou por uma ferramenta de testes de API.

---

 ## 🌐 Resultado

 Ao executar a aplicação e acessar a rota configurada no Controller, o servidor retorna a mensagem:

```
Servidor Nest JS Ativo[Aula 07]
```

 Isso confirma que a aplicação NestJS foi iniciada corretamente e que o Controller está conseguindo utilizar o Service.

---

 ## 📝 Conclusão

 A **Aula 07** foi importante para compreender os conceitos básicos do **NestJS** e sua estrutura de desenvolvimento backend.

 Durante a atividade, foi possível conhecer a organização de um projeto NestJS, trabalhar com **Modules, Controllers e Services**, além de utilizar **TypeScript** para criar a lógica da aplicação.

 O desenvolvimento dessa primeira aplicação serviu como base para compreender como projetos backend podem ser estruturados de forma organizada, facilitando a implementação de novas funcionalidades nas próximas aulas.

---

 ## 👩‍💻 Projeto

 **Aula 07 - Projeto NestJS**

 Desenvolvido durante as aulas de desenvolvimento **Full Stack / Backend**.

```

Esse formato fica mais completo para entregar como atividade, porque documenta **o que foi aprendido, as tecnologias, a estrutura do projeto, o código desenvolvido, os comandos utilizados e o resultado da aula**.
```