import { PartialType } from "@nestjs/swagger";
import { CreatAlunoDto } from "./create-aluno.dto.js";

export class UpdateAlunoDto extends PartialType(CreatAlunoDto){
    nome: string;
    idade: number;
    matricula: string;
    cursos: string[];
}