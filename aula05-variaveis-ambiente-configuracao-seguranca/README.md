 API de Pagamentos

Projeto desenvolvido em Node.js para configuração e inicialização de um serviço
integrado a uma API de pagamentos e banco de dados MongoDB.

 Funcionalidades

- Carregamento de variáveis de ambiente com `dotenv`
- Configuração da porta do servidor
- Integração com API de pagamentos
- Conexão/configuração com MongoDB
- Validação da chave da API antes da inicialização
- Exibição do status da configuração no console

 Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
API_KEY_PAGAMENTO=sua_chave_aqui
DATABASE_URL=mongodb://localhost:27017/meu_banco
