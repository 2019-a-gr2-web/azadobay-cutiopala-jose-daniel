import {DistribuidorEntity} from '../../distribuidor/distribuidor.entity'
import {IsEmpty, IsNotEmpty, IsNumber, IsString, IsDate, IsOptional} from "class-validator";

export class TragosCreateDto {
    
    @IsEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';

    @IsNotEmpty()
    @IsNumber()
    gradosAlcohol: number;

    @IsDate()
    fechaCaducidad: Date;

    @IsNumber()
    precio: number;

    @IsNumber()
    @IsOptional()
    distribuidorId: DistribuidorEntity;

}