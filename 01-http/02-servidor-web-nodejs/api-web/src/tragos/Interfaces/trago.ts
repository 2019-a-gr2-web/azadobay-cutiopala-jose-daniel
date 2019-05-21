export interface Trago{
    id: number;
    nombre: string;
    tipo: 'Ron' | 'Vokda' | 'Whiskey' | 'Tequila'; 
    gradoAlcohol: number;
    fechaCaducidad: Date;
    precio: number; 

}