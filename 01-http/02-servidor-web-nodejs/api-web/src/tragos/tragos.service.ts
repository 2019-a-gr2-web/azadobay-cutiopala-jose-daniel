import { Injectable } from "@nestjs/common";
import { Trago } from "./Interfaces/trago";

@Injectable()
export class TragosService{

    bddTragos: Trago[] = [];
    recnum=1;

    constructor(){
        const trago: Trago ={
            nombre: 'Club',
            tipo: 'Ron',
            gradoAlcohol:5,
            fechaCaducidad: new Date(2019,5,21),
            precio:2
        }

        this.crear(trago)
    }

    crear(nuevoTrago:Trago ){

        nuevoTrago.id = this.recnum;
        this.recnum++;
        this.bddTragos.push(nuevoTrago);
        return nuevoTrago;
    }

    buscarPorId(id:number){
     return   this.bddTragos.find(
            (trago)=>{
                return trago.id === id;
            }
        )
    }

    buscarPorNombre(nombre: string):Trago {
        return this.bddTragos.find(
            (trago) => {
                return trago.nombre.toUpperCase().includes(nombre.toUpperCase());
            }
        );
    }

    eliminarPorId(id: number):Trago[] {
        const indice = this.bddTragos.findIndex(
            (trago) => {
                return trago.id === id
            }
        );
        this.bddTragos.splice(indice,1);
        return this.bddTragos;
    }

    actualizar(tragoActualizado: Trago, id:number):Trago[] {

        const indice = this.bddTragos.findIndex(
            (trago) => {
                return trago.id === id
            }
        );
        tragoActualizado.id = this.bddTragos[indice].id;
        this.bddTragos[indice] = tragoActualizado;

        return this.bddTragos;
    }

}