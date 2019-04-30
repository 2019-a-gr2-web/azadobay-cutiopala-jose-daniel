import { Controller, Get, HttpCode, Headers, Post, Body, Put, Query, Param, Delete, Response, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/Calculadora')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/Sumar')
  @HttpCode(200)
  getSuma(@Headers() headers, @Request() req, @Response() res) {

    if (headers.numero1 && headers.numero2) {
      const puntos = req.signedCookies.Dany;
      const resultado = Number(headers.numero1) + Number(headers.numero2);
      this.realizarOperacion(puntos, resultado, req, res);
    } else { res.send(`No se puede realizar la suma.`) }
  }

  @Post('/Restar')
  @HttpCode(201)
  postResta(@Body() body, @Request() req, @Response() res) {
    if (body.numero1 && body.numero2) {
      const puntos = req.signedCookies.Dany;
      const resultado = Number(body.numero1) - Number(body.numero2);
      this.realizarOperacion(puntos, resultado, req, res);
    } else {
      return `No se puede realizar la resta.`;
    }
  }

  @Put('/Multiplicar')
  @HttpCode(202)
  putMultiplicacion(@Query() queryParams, @Request() req, @Response() res) {
    if (queryParams.numero1 && queryParams.numero2) {
      const puntos = req.signedCookies.Dany;
      const resultado = Number(queryParams.numero1) * Number(queryParams.numero2);
      this.realizarOperacion(puntos, resultado, req, res);
    } else {
      return `No se puede realizar la multiplicacion.`;
    }

  }

  @Delete('/Dividir')
  @HttpCode(203)
  deleteDividir(@Query() queryParams, @Body() body, @Response() res, @Request() req) {
    if (queryParams.numero1 && body.numero2) {
      const puntos = req.signedCookies.Dany;
      const resultado = Number(queryParams.numero1) / Number(body.numero2);
      this.realizarOperacion(puntos, resultado, req, res);
    } else {
      return res.send({ mensaje: 'No se pudo realizar la division' });
    }
  }


  crearCookie(resultado, nuevoValor, @Response() res, mensaje) {
    res
      .cookie(
        'Dany',
        nuevoValor,
        { signed: true })
      .send({
        Usuario: 'Dany',
        'Resultado Operacion': `${resultado}`,
        Puntos: nuevoValor,
        Mensaje: `${mensaje}`,
      });
  }

  realizarOperacion(puntos, resultado, @Request() req, @Response() res) {
    const cookieSegura = req.signedCookies;
    if (cookieSegura.Dany) {

      const puntosActuales = Number(puntos) - resultado;

      if (puntosActuales < 0) {
        res.send({
          Mesaje: 'No se puede realizar la operación',
        })
      }
      if (puntosActuales === 0) {

        this.crearCookie(
          resultado,
          puntosActuales,
          res,
          'Se le acabaron los puntos')
      } else {
        this.crearCookie(resultado, puntosActuales, res, 'Operacion Realizada');
      }
    } else {
      this.crearCookie(0, 100, res, 'Cookie Creada');
    }
  }

}
