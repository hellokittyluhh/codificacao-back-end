# Aula 13 — Middlewares e Interceptors no NestJS

 Nesta aula, foi estudado o funcionamento de **Middlewares** no NestJS, utilizando-os para interceptar e processar requisições HTTP antes que elas cheguem aos controllers.

 ### O que foi realizado

 - Criamos um `LoggerMiddleware` utilizando `NestMiddleware`.
- Implementamos um **log das requisições**, exibindo o método HTTP e a rota acessada.
- Utilizamos `req.originalUrl` para identificar a URL atual da requisição.
- Criamos uma verificação para rotas administrativas (`/admin`).
- Utilizamos o header personalizado `x-use-base` para verificar uma permissão.
- Caso o valor do header não seja `"Administrator"`, a requisição é bloqueada com status **403 (Forbidden)**.
- Caso a permissão seja válida, utilizamos `next()` para permitir que a requisição continue.
- Registramos o middleware no `AppModule` através do `MiddlewareConsumer` e `forRoutes('*')`, fazendo com que ele seja aplicado às rotas da aplicação.

 ### Controller

 Também foram criadas duas rotas para testar o funcionamento:

 - `GET /` → rota pública.
- `GET /admin` → rota administrativa.

 A rota `/admin` depende do header `x-use-base: Administrator` para ser acessada.

 ### Conceitos aprendidos

 - **Middleware**
- `NestMiddleware`
- `MiddlewareConsumer`
- `forRoutes()`
- `Request`, `Response` e `NextFunction`
- Headers HTTP
- Status `403`
- Controle de acesso
- Uso do `next()` para continuar o fluxo da requisição.