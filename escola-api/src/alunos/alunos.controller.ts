import {Controller, Get,Post,Body, Patch,Param,Delete,Query,DefaultValuePipe,ParseIntPipe} from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreatAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags,ApiResponse,ApiOperation ,ApiQuery} from "@nestjs/swagger";

@ApiTags('alunos')
@Controller('alunos')

export class AlunosController {
    constructor(private readonly alunosService: AlunosService){}
     @Post()
     @ApiOperation({
      summary:'criar a Matricula do aluno',
     })
      @ApiResponse({
      status:201,
      description:'Aluno criado com sucesso',
     })
      @ApiResponse({
      status:400,
      description:'Requisição inválida ou dados de entrada incorretos/mal formatados',
     })
    create(@Body() createAlunoDto: CreatAlunoDto){
    return this.alunosService.create(createAlunoDto);
     }

   //   @Get()
   //   @ApiOperation({
   //    summary:'Lista todos os alunos',
   //   })
   //   @ApiResponse({
   //    status:200,
   //    description:'Lista de alunos retornada com Sucesso',
   //   })
   //   @ApiResponse({
   //   status:404,
   //   description:'Nenhum aluno encontrado',
    // })

    // findAll(){
      //  return this.alunosService.findAll();
    // }

    @Get()
    @ApiOperation({
      summary:'Listar alunos com paginação,filtros opcionais e ordenação',
    })
    @ApiResponse({
      status:200,
      description:'lista de alunos retornada com sucesso',
    })
   @ApiResponse({
      status:404,
      description:'Nenhum aluno encontrado',
   })
   @ApiResponse({
      status:500,
      description:'Erro interno do servidor',
   })
  @ApiQuery({
   name:'page',
   required:false,
   type:Number,
   description: 'numero de página (padrão:1)',
  })
  @ApiQuery({
   name:'limit',
   required:false,
   type:Number,
   description:'numero de intes por página(padrão:10)',
  })
  @ApiQuery({
   name: 'nome',
   required: false,
   type: String,
   description:'Filtar alunos pelo nome (Ex: Jamilly)'
  })

@ApiQuery({
   name: 'curso',
   required: false,
   type: String,
   description:'Filtar alunos pelo curso (Ex: Engenharia Civil)'
  })

@ApiQuery({
   name:'orderBy',
   required:false,
   type:String,
   description:'Campos (ex: nome, idade, matricula e curso)',
})

@ApiQuery({
   name:'orderDirection',
   required:false,
   enum:[
      'asc',
      'desc',
   ],
   description:'(asc) para Crescente e (desc) para decrescente'
})




  findPageFilter(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('nome') nome?: string,
        @Query('curso') curso?: string,
        @Query('orderBy') ordeBy?: string,
        @Query('orderDirection') orderDirection?: 'asc' | 'desc',
        ){
        return this.alunosService.findPageFilter(
         page,
         limit,
         nome, 
         curso,
         ordeBy,
         orderDirection
      );
    }


     @Get(':id')
     @ApiOperation({
      summary:'Obter detalhes de um aluno específico',
     })
     @ApiResponse({
      status:200,
      description:'Aluno específico encontrado'
     })
     @ApiResponse({
      status:404,
      description:'Aluno específico não encontrado',
     })
     findOne(@Param('id') id : string){
        return this.alunosService.findOne(id);
     }

     @Patch(':id')
     @ApiOperation({
      summary:'Atualizar informações de um aluno específico',
     })
     @ApiResponse({
      status:200,
      description:'Informações do aluno específico atualizadas com sucesso',
     })
     @ApiResponse({
      status:404,
      description:'Aluno específico não encontrado'
     })
     updateAlunoDto(@Param('id')id: string,@Body() updateAlunoDto : UpdateAlunoDto){
        return this.alunosService.update(id ,updateAlunoDto)
     }

     @Delete(':id')
     @ApiOperation({
      summary:'Remover um aluno específico',
     })
     @ApiResponse({
      status:200,
      description:'Aluno removido com sucesso,'})
      @ApiResponse({
         status:404,
         description:'Aluno não encontado'
      })
     remove(@Param('id') id: string){
        return this.alunosService.remove(id);
     }
}