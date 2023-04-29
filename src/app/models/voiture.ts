import { Marque } from "./marque";

export interface Voiture {
    id:number;
    year:string;
    author:string;
    category:string;
    kilometrage:number;
    brand:Marque;
    name:string;
    phone_number:string;
    price:number;
    puissance:number;
    quantity:number;
    image:string;
}