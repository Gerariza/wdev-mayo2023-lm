import { Cursos } from "./cursos";
// se importa CURSO para complementar el arreglo de cursos ya que data es el arreglo.

export class Respuestacurso {
    code: number = 0;
    message: string = "";
    data: Cursos[]=[];
}
