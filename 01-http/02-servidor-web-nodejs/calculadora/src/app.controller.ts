import { Controller, Get, HttpCode, Headers, Post, Body, Put, Query, Param, Delete, Response, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/Calculadora')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/Sumar')
  @HttpCode(200)
  getSuma(@Headers() headers) {
    if (headers.numero1 && headers.numero2) {
      return `Resultado = ${Number(headers.numero1) + Number(headers.numero2)}`;
    } else {
      return `No se puede realizar la suma.`;
    }
  }

  @Post('/Restar')
  @HttpCode(201)
  postResta(@Body() body) {
    if (body.numero1 && body.numero2) {
      return `Resultado = ${Number(body.numero1) - Number(body.numero2)}`;
    } else {
      return `No se puede realizar la resta.`;
    }
  }

  @Put('/Multiplicar')
  @HttpCode(202)
  putMultiplicacion(@Query() queryParams) {
    if (queryParams.numero1 && queryParams.numero2) {
      return `Resultado = ${Number(queryParams.numero1) * Number(queryParams.numero2)}`;
    } else {
      return `No se puede realizar la multiplicacion.`;
    }

  }

  @Delete('/Dividir')
  @HttpCode(203)
  deleteDividir(@Query() queryParams, @Body() body, @Response() res) {

    if (queryParams.numero1 && body.numero2) {
      res.set('Respuesta', `${Number(queryParams.numero1) / Number(body.numero2)}`);
      return res.send({ mensaje: 'Operacion Exitosa',
    respuesta: 'Ver Cabeceras' });
    } else {
      return res.send({ mensaje: 'No se pudo realizar la division' });
    }
  }

}
