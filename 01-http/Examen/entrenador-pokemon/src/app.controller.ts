import { Controller, Get, Post,Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/examen')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/login')
  login( @Response() res){

    return res.render('login');
}

 @Post('/inicioSesion')
 ingresar(@Response() res){



  return res.render('entrenador/home');
 }


}
