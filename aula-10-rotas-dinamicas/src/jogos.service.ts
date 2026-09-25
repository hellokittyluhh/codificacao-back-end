import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class JogoService {
    private jogos  =[
    {id:1, titulo:'Minecraft',studio:"Mojang Studios"},
    {id:2, titulo:'The Legend of Zelda :Ocarina of time', studio:'Nintendo'},
    {id:3,titulo:'Grand theft Auto V',studio:'Rockstar Nort'},
    {id:4,titulo:'elder Ring', studio:'FromSoftware'},
    {id:5,titulo:'God of War', studio:'Santa Monica Studio'},
    ];
    buscarPorId(id:number){
        const jogo = this.jogos.find((j)=> j.id === id);
        if(!jogo){
            throw new NotFoundException(`Jogo com ID ${id} não localizada em nosso estoque.`);
        }
        return jogo;
    }
}