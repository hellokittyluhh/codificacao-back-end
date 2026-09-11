# 🚀 Repositório de Estudos: Codificação Back-End

![NodeJS](https://img.shields.io/badge/Node.js-v18+-green?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-v4+-lightgrey?style=flat&logo=express)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat&logo=javascript)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

Este repositório foi criado com o objetivo de centralizar todos os meus conteúdos, exercícios, anotações e projetos práticos focados no desenvolvimento **Back-End** utilizando o ecossistema **Node.js** e **Express**.

---

## 🎯 Objetivos

- Dominar o desenvolvimento de aplicações server-side utilizando **JavaScript** no ambiente **Node.js**.
- Construir e estruturar APIs RESTful resilientes, escaláveis e bem documentadas usando **Express**.
- Compreender e aplicar o ecossistema de pacotes e dependências via **NPM**.
- Praticar o controle de versão de código profissional utilizando **Git** e **GitHub**.
- Desenvolver habilidades práticas no manuseio de requisições, respostas, middlewares e rotas.

---

## 🛠️ Tecnologias & Ferramentas

| Ferramenta / Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução JavaScript no lado do servidor |
| **Express.js** | Framework web para criação de APIs e rotas de forma simplificada |
| **JavaScript (ES6+)** | Linguagem de programação principal utilizada no Back-End |
| **NPM** | Gerenciador de pacotes padrão do Node.js |
| **Git** | Sistema de controle de versão distribuído |
| **GitHub** | Plataforma de hospedagem de código e controle de versão |
| **Postman / Insomnia** | Testes e validação de requisições das APIs desenvolvidas |

---

## 📚 Tópicos & Conteúdo do Módulo

- [x] **01. Fundamentos do Node.js & NPM**
  - O que é o Node.js e Event Loop
  - Inicialização de projetos (`npm init`)
  - Gerenciamento de dependências (`package.json` e `package-lock.json`)
  - Módulos nativos (`fs`, `path`, `http`) e padrão CommonJS / ES Modules
- [ ] **02. Controle de Versão com Git & GitHub**
  - Comandos fundamentais (`git init`, `add`, `commit`, `push`, `pull`)
  - Criação e merge de ramificações (`git branch`, `checkout`)
  - Configuração correta de arquivos `.gitignore` para o ecossistema Node.js
- [ ] **03. Construção de APIs com Express.js**
  - Configuração do servidor e instanciação do Express
  - Métodos e verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`)
  - Parâmetros de requisição: *Query Params*, *Route Params* e *Request Body*
  - Envio de respostas em formato JSON (`res.json()`)
- [ ] **04. Middlewares & Arquitetura**
  - Conceito e fluxo de funcionamento dos Middlewares
  - Validação de dados recebidos no corpo da requisição
  - Tratamento e centralização de erros nas rotas
  - Organização da estrutura de arquivos em camadas
- [ ] **05. Projetos Práticos & Consolidação**
  - Implementação de operações de CRUD completo
  - Persistência e manipulação temporária de dados

---

## 📂 Estrutura do Repositório

```text
.
├── 01-fundamentos-node/      # Conceitos base, módulos nativos e scripts de teste
├── 02-gerenciamento-npm/     # Instalação, remoção e uso de dependências
├── 03-api-express/           # Implementação de rotas, controllers e middlewares
├── 04-projetos-praticos/     # Aplicações CRUD desenvolvidas durante os estudos
├── .gitignore                # Arquivos ignorados pelo Git (node_modules, .env)
└── README.md                 # Documentação principal do repositório