# 📚 Aula 06 — Criação de um Servidor Web com Node.js

 Nesta aula, foi desenvolvido um **servidor web utilizando Node.js**, colocando em prática conceitos fundamentais de comunicação entre cliente e servidor por meio do protocolo **HTTP**.

 O projeto utiliza o módulo nativo **`http`**, importado diretamente do Node.js, sem a necessidade de instalar bibliotecas externas. A partir dele, foi utilizado o método `createServer()` para criar o servidor e definir como ele deve responder às requisições recebidas.

 ### 🌐 Funcionamento do servidor

 O servidor recebe dois objetos principais:

 - **`req` (request):** contém as informações da requisição feita pelo cliente, como o método HTTP utilizado e a URL acessada.
- **`res` (response):** é utilizado para construir e enviar a resposta de volta para o cliente.

 Também foi adicionada uma mensagem no console para acompanhar as requisições recebidas:

console.log(`[LOG] Método recebido: ${req.method} | Rota: ${req.url}`);


 Dessa forma, é possível visualizar no terminal qual método HTTP foi utilizado e qual rota foi acessada.

 ### 📍 Rota `/status`

 Foi criada uma rota específica para verificar o funcionamento do servidor:


/status

 Quando essa rota é acessada, o servidor retorna o código HTTP **200 (OK)** e uma resposta em formato JSON:


{
  "servidorWeb": "Online"
}


 Isso permite verificar de maneira simples se o servidor está funcionando corretamente.

 ### ❌ Tratamento de rotas inexistentes

 Também foi implementado um tratamento para quando o usuário acessar uma rota que não existe.

 Nesse caso, o servidor retorna o código **404 (Not Found)** juntamente com uma mensagem em JSON:

{
  "erro": "Página não encontrada"
}


 Esse tratamento é importante para informar corretamente ao cliente que o recurso solicitado não foi encontrado.

 ### 🔐 Cabeçalhos HTTP

 A aula também trabalhou com **cabeçalhos HTTP**, utilizando:


const cabecalhoPadrao = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY'
};


 Esses cabeçalhos adicionam algumas proteções importantes à resposta do servidor. Por exemplo, `X-Content-Type-Options: nosniff` ajuda a impedir que o navegador tente interpretar o conteúdo com um tipo diferente do informado, enquanto `X-Frame-Options: DENY` impede que a página seja carregada dentro de um `iframe`.

 ### 📦 Respostas em JSON

 As respostas são convertidas para JSON utilizando:


JSON.stringify()


 E o servidor informa ao cliente que o conteúdo retornado possui o tipo:


application/json


 Isso é importante para que o cliente saiba como interpretar corretamente os dados recebidos.

 ### 🚀 Inicialização do servidor

 Por fim, o servidor é colocado para escutar na **porta 3000**:

servidorWeb.listen(3000, () => {
  console.log('servidor web ativo');
});


 Assim, depois de executar o projeto, podemos acessar o servidor localmente através da porta `3000` e testar a rota `/status`.

 ### 📄 Configuração do projeto

 O projeto também possui um arquivo `package.json`, configurado para utilizar **ES Modules** através da propriedade:

"type": "module"

 Isso permite utilizar a sintaxe moderna de importação do JavaScript, como:

import http from 'http';

 🎯 O que foi aprendido

 Nesta aula, foram trabalhados conceitos importantes para a criação de servidores web:

 - Criação de um servidor com o módulo `http` do Node.js;
- Funcionamento de **requisições e respostas HTTP**;
- Utilização de métodos e rotas através de `req.method` e `req.url`;
- Definição de **status HTTP**, como `200` e `404`;
- Criação e utilização de cabeçalhos HTTP;
- Retorno de informações no formato **JSON**;
- Tratamento de rotas inexistentes;
- Utilização da porta `3000`;
- Configuração de um projeto Node.js com **ES Modules**.
