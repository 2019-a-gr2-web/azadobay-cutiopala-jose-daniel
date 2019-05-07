import { Controller, Get, Post, HttpCode, Put, Delete, Headers, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';


// Libreria para validaciones

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

    return 'No Ok `${random}`';
  }

  @Get('/user')
  getUser(
    @Request() req,
    @Response() res
  ){
    const userName = req.query.userName;
    console.log(req.query);

    if(userName){
      console.log('Usuario Creado');   
      res
      .status(200)
      .cookie("nombreUsuario",`${userName}`)
      .send({
        nombreUsuario: `${userName}`,
        resultado: "200 OK"
      })
    } else {
      res.send("Error")
    }
  }


  @Get('/semilla')
  semilla(
    @Request() request,
    @Response() response
  ) {

    console.log(request.cookies);
    console.log(typeof (request.cookies));
    const cookies = request.cookies;

    const cookieSegura = request.signedCookies.fechaServidor;

    if (cookieSegura){
      console.log('Cookie Segura');
      console.log(cookieSegura);

    }else{
      console.log('Cookie InSegura');
    }



    if (cookies.miCookie) {

      const horaFechaServidor = new Date();
      const minutos = horaFechaServidor.getMinutes();
      horaFechaServidor.setMinutes(minutos + 1);

      response.cookie(
        'fechaServidor',   //Key Nombre
        new Date().getTime(),// Value Valor
        {
         signed: true,
        expires: horaFechaServidor
        });
      response.send('ok');
    } else {
      response.send(':(');
    }
  }

  @Get('inicio') // endpoint
    inicio(
        @Response() res
    ) {
        return res.render(
            'inicio',
            {
                estaVivo: false
            });
    }

  @Get('peliculas')
  peliculas(
    @Response() res
) {
    return res.render(
        'peliculas/inicio',
        {

        });
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


// Igualarse clase de cookies

/*
//poner cookie desde el servidor
if(CookieAccessInfo.micookie) {
  response.cookie('fechaServidor' //Se envia como primer parametro el nombre  (Key)
  ,new Date // Segundo parametro el valor
  ,{
    expires: new Date()
  } );  // Tercer Parametro las opciones

  //Cookie Segura e Insegura
  //request.coookies ---> Cookies no segura
  //request.signed.cookies ---> cookies seguras.


};*/


if(""){
  console.log("V");
  }else{
  
    console.log("F");
  }


