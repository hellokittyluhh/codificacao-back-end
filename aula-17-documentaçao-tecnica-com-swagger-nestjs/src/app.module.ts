import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos/produto.controller.js';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [],
})
export class AppModule {}
