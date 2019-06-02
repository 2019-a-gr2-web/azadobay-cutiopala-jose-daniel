import { Module } from '@nestjs/common';
import {EntrenadorController} from './entrenador.controller';

@Module({
    imports: [],
    controllers: [EntrenadorController],
    providers: [],
  })
  export class EntrenadorModule {}