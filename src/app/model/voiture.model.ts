import { Marque } from "./marque.model";

export class voiture {
    idVoiture? : number;
    nomVoiture? : string;
    prixVoiture? : number;
    dateCreation? : Date;
    marque? : Marque;
}