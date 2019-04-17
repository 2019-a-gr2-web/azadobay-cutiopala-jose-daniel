import { Controller, Get, Post, HttpCode, Put, Delete, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Get('/hello-get') // Metodo http
  getHello(): string {
    // return this.appService.getHello();
    return 'Hola Get';
  }

  @Post('/hello-post') // Metodo http post
  @HttpCode(200)
  postHello() {
    return 'Hola mundo en post';
  }
  @Put('/hello-put') // Metodo http
  putHello(): string {
    // return this.appService.getHello();
    return 'Hola mundo en put';
  }

  @Delete('/hello-del') // Metodo http
  deleteHello(): string {
    // return this.appService.getHello();
    return 'Hola mundo en delete';
  }

  @Get('/adivina') // Metodo http
  adivina(@Headers() hedears): string {
    // return this.appService.getHello();
    console.log(hedears);
    const random = Math.round(Math.random() * 10);
    if (random == Number(hedears.numero)) {
      return 'Ok';
    }

    return 'No Ok `${random}`' ;
  }


  // Pergar aqui objeto JSON.
}

// js -> ts



/*
const nombre: string = 'Adrian'; // string
const edad = 29;  // number
const sueldo = 1.20;  // number
const casado = false;  // boolean
const hijos = null;  // null
const alas = undefined;  // undefined
*/


/*
* Segmento inicial: /api
* 1) Segmento Accion: GET 'hello-world' -> 'Hello world'
* 2) Segmento Accion: POST 'hola-mundo' -> 'Hola mundo'
* 3) Segmento Accion: PUT '...' -> '....'
* 4) Segmento Accion: DELETE '..' -> '....'
* */





/*
@NombreDecoradorClase() // Decorador -> FUNCION
class usuario{
  @Atributo() // Decorador
  atributoPublico; // Public
  private atributoPrivado;
  protected atributoProtegido;
  constructor(@Parametro() atributoPublico,
              @OtroParametro() atributoPrivado,
              @OtroOtroParametro() atributoProtegido){
    this.atributoPublico = atributoPublico;
    this.atributoPrivado = atributoPrivado;
    this.atributoProtegido = atributoProtegido;
  }
  @MetodoA()
  public metodoPublico(@ParametroA() a){}
  @MetodoB()
  private metodoPrivado(){}
  protected metodoProtegido(){}
}
*/

const json = [
  {
    llave: 'valor',
    "key": "value",
    'nombre': "Adrian\"\"",
    edad: 29,
    sueldo: 10.21,
    casado: false,
    hijos: null,
    mascotas: [
      "cachetes",
      1,
      1.01,
      false,
      null,
      {
        "nombre": "cachetes"
      },
    ],
  },
];

// JS -> JSON

let adrian = 'Adrian';

// TS

let vicente: any = 'Vicente';
vicente = 1;

let objeto: any = {
  propiedad: 'valor',
  propiedadDos: 'valor2'
};
objeto.propiedad  // valor
objeto.propiedadDos  // valor2

// Agregar propiedades a un objeto
objeto.propiedadTres = 'valor3';
objeto['propiedadTres'] = 'valor 3';
delete objeto.propiedadTres; // -> destruir
objeto.propiedadTres = undefined; // -> destruir forma segura
