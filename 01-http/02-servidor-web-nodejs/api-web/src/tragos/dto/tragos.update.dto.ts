import {DistribuidorEntity} from '../../distribuidor/distribuidor.entity';
import {IsEmpty, IsNotEmpty, IsNumber, IsString, IsDate, IsOptional} from "class-validator";

export class TragosUpdateDto {
    @IsEmpty()
    id:number;

    
    @IsString()
    nombre: string;

    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';

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