import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntrenadorModule } from './Entrenador/entrenador.module';

@Module({
  imports: [EntrenadorModule],// Modulos
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
