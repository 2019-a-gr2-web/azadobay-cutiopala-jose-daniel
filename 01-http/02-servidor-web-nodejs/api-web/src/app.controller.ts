import { Controller, Get, Post, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Metodo http
  getHello(): string {
    return this.appService.getHello();
  }

  @Post() //Metodo http post
  @HttpCode(200)
  postHello(){
    return 'Hola mundo en post';
  }
}
