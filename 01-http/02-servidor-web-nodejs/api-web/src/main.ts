import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import {NestExpressApplication} from "@nestjs/platform-express"
import { join } from 'path';
//const cookieParser = require('cookie-parser');
import* as express from 'express';
import* as favicon from 'serve-favicon';
import* as path from 'path';

async function bootstrap() {
  const app = await NestFactory
  .create(AppModule) as NestExpressApplication;
  
  app.use(cookieParser('Secreto'));
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.use(express.static('publico'))
  app.use(favicon(path.join(__dirname, '..','publico','imagenes', 'nacho.ico')))
  await app.listen(3000);


}
 
bootstrap();
