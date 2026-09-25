## 📚 Aula de hoje — Rotas Dinâmicas no NestJS

Na aula de hoje, continuamos os estudos sobre **NestJS** e aprendemos a trabalhar com **rotas dinâmicas**, utilizando parâmetros enviados diretamente pela URL.

Foi criado um `JogosController` responsável por receber as requisições relacionadas aos jogos. Para isso, utilizamos o decorator `@Controller('jogos')`, definindo que as rotas desse controller terão como base o caminho `/jogos`.

Também aprendemos a utilizar o decorator `@Get()` para criar uma rota de consulta. Nesse caso, utilizamos uma rota dinâmica:

```ts
@Get(':id')


 Dessa forma, podemos acessar uma URL como:

/jogos/1
/jogos/2
/jogos/10
```

 O valor presente na URL pode ser capturado através do `@Param()`:

```
buscarPorId(@Param('id', ParseIntPipe) id: string) {
    const numId = +id;
    return this.jogosService.buscarPorId(numId);
}
```

 Um dos pontos importantes da aula foi entender como trabalhar com **parâmetros de rota**. O `@Param('id')` pega o valor que foi enviado no lugar de `:id`. Também utilizamos o `ParseIntPipe`, que auxilia na conversão e validação do parâmetro recebido.

 Além disso, continuamos praticando o conceito de **injeção de dependência** do NestJS. O `JogosService` é recebido no construtor do controller:

```
constructor(private readonly jogosService: JogosService) {}
```

 Com isso, o controller não precisa implementar toda a lógica de busca. Ele apenas recebe a requisição, pega o `id` e chama o método correspondente no service:

```
return this.jogosService.buscarPorId(numId);
```

 Também foi trabalhada a organização dos arquivos dentro do projeto. O `AppModule` fica responsável por registrar os controllers e services utilizados pela aplicação:

```
@Module({
  imports: [],
  controllers: [AppController, JogosController],
  providers: [AppService, JogosService],
})
```

 Essa separação ajuda a manter o projeto mais organizado, deixando cada parte com uma responsabilidade específica:

 - **Controller:** recebe e responde às requisições HTTP.
- **Service:** concentra a lógica da aplicação.
- **Module:** organiza e registra os componentes da aplicação.
- **Param:** permite acessar valores enviados através da URL.
- **Get:** define uma rota para requisições HTTP GET.
- **ParseIntPipe:** auxilia na transformação/validação de valores recebidos.

 ### 🎯 O que aprendi hoje

 Com a aula de hoje, consegui entender melhor como funciona a comunicação entre **rotas, controllers e services** no NestJS. Também aprendi como criar endpoints que recebem informações pela própria URL, permitindo buscar um jogo específico através do seu `id`.

 Esse conteúdo é importante para a construção de APIs REST, já que é muito comum utilizar rotas como `/jogos/:id`, `/usuarios/:id`, `/produtos/:id`, entre outras.

 A aula também reforçou a importância de manter uma boa organização do projeto, separando as responsabilidades entre os diferentes componentes do NestJS.


