import { Controller, Get, Post, Res, Body, Query } from "@nestjs/common";
import { TragosService } from "./tragos.service";
import { Trago } from "./interfaces/trago";
import { TragosCreateDto } from "./dto/tragos.create.dto";
import { validate } from "class-validator";

@Controller('/api/traguito')
export class TragosController {

    constructor(private readonly _tragosService: TragosService) {

    }

    @Get('lista')
    async listarTragos(
        @Res() res
    ) {
        const arregloTragos = await this._tragosService.buscar();


        res.render('tragos/lista-tragos', {
            arregloTragos: arregloTragos

        })
    }

    @Get('crear')
    crearTrago(
        @Res() res,
        @Query('mensaje') mensaje: string,
    ) {
        res.render('tragos/crear-editar', {
            mensaje: mensaje
        })
    }

    @Post('crear')
    async crearTragoPost(
        @Body() trago: Trago,
        @Res() res,
        // @Body('nombre') nombre:string,
        // @Body('tipo') tipo:string,
        // @Body('gradosAlcohol') gradosAlcohol:number,
        // @Body('fechaCaducidad') fechaCaducidad:Date,
        // @Body('precio') precio:number,
    ) {
        trago.gradosAlcohol = Number(trago.gradosAlcohol);
        trago.precio = Number(trago.precio);
        trago.fechaCaducidad = trago.fechaCaducidad ? new Date(trago.fechaCaducidad) : undefined;


        let tragoAValidar = new TragosCreateDto();
        tragoAValidar.nombre = trago.nombre;
        tragoAValidar.tipo = trago.tipo;
        tragoAValidar.fechaCaducidad = trago.fechaCaducidad;
        tragoAValidar.precio = trago.precio;
        tragoAValidar.gradosAlcohol = trago.gradosAlcohol;

        try {
            const errores = await validate(tragoAValidar);
            if (errores.length > 0) {
                console.log(errores);
                res.redirect('/api/traguito/crear?mensaje=Tienes un error en el formulario');
            } else {
                const respuestaCrear = await this._tragosService
                    .crear(trago); // Promesa

                console.log('RESPUESTA: ', respuestaCrear);

                res.redirect('/api/traguito/lista');
            }
        }
        catch (e) {
            console.error(e);
            res.status(500);
            res.send({ mensaje: 'Error', codigo: 500 });
        }
    }

    @Get('editar')
    async editarTrago(
        @Res() res,
        @Query('mensaje') mensaje: string,
        @Query('id') id?: number,
        ) 
        {

        let tragoEncontrado = await this._tragosService.buscarporId(id);
        console.log("trago Editar",tragoEncontrado)
        
        res.render('tragos/crear-editar', 
        {
            mensaje: mensaje,
            id: id,
            tragoEncontrado: tragoEncontrado,

        })
    }


    @Post('editar')
    async editarTragoPost(
        @Body() trago: Trago,
        @Res() res,
        // @Body('nombre') nombre:string,
        // @Body('tipo') tipo:string,
        // @Body('gradosAlcohol') gradosAlcohol:number,
        // @Body('fechaCaducidad') fechaCaducidad:Date,
        // @Body('precio') precio:number,
    ) {
        trago.gradosAlcohol = Number(trago.gradosAlcohol);
        trago.precio = Number(trago.precio);
        trago.fechaCaducidad = trago.fechaCaducidad ? new Date(trago.fechaCaducidad) : undefined;


        let tragoAValidar = new TragosCreateDto();
        tragoAValidar.nombre = trago.nombre;
        tragoAValidar.tipo = trago.tipo;
        tragoAValidar.fechaCaducidad = trago.fechaCaducidad;
        tragoAValidar.precio = trago.precio;
        tragoAValidar.gradosAlcohol = trago.gradosAlcohol;

        try {
            const errores = await validate(tragoAValidar);
            if (errores.length > 0) {
                console.log(errores);
                res.redirect('/api/traguito/editar?mensaje=Tienes un error en el formulario');
            } else {
                const respuestaEditar = await this._tragosService
                    .actualizar(1,trago); // Promesa

                console.log('RESPUESTA: ', respuestaEditar);
                res.redirect('/api/traguito/lista');
            }
        }
        catch (e) {
            console.error(e);
            res.status(500);
            res.send({ mensaje: 'Error', codigo: 500 });
        }
    }


}