import { Controller,Get,Param, ParseIntPipe } from "@nestjs/common";
import { JogoService } from "./jogos.service.js";


@Controller('jogos')
export class JogosController {

    constructor(private readonly jogosService: JogoService){}

    @Get('id')
    buscarPorId(@Param('id', ParseIntPipe) id:string){
        const numId = +id;
        return this.jogosService.buscarPorId(numId);
    }
}
