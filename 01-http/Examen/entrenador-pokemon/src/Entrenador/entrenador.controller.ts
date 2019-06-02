import { Controller, Get, Post, Response } from '@nestjs/common';

@Controller('/entrenador')

export class EntrenadorController {
    constructor() {

    }

    @Get('/papas')
    papas(@Response() res) {

        return res.render('entrenador/gestion-entrenador');
    }
}