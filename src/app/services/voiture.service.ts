import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { voiture } from '../model/voiture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { marqueWrapper } from '../model/marqueWrapped.model';
import { RechercheParMarqueComponent } from '../recherche-par-marque/recherche-par-marque.component';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURLMar: string = 'http://localhost:8080/voitures/mar';

  voitures: voiture[]=[];
  /*voiture! : voiture;
  marques : Marque[]=[]; */
  constructor(private http : HttpClient) {
   /* 
    this.marques = [
      {idMar: 1, nomMar : "Ford"},
      {idMar: 2, nomMar : "BMW"},
    ];*/

    /*
    this.voitures = [
      {idVoiture : 1, nomVoiture : "Fiesta", prixVoiture : 60000, dateCreation : new Date("01/14/2011"),marque : {idMar: 1, nomMar : "Ford"}},
      {idVoiture : 2, nomVoiture : "Focus", prixVoiture : 160000, dateCreation : new Date('18/07/2010'),marque : {idMar: 2, nomMar : "Ford"}},
    ];*/
   }

   listeVoiture(): Observable<voiture[]>{
        return this.http.get<voiture[]>(apiURL);
   }

   ajouterVoiture( v: voiture): Observable<voiture>{
    return this.http.post<voiture>(apiURL, v, httpOptions);
   }

   supprimerVoiture( id : number){
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
   }

   
   consulterVoiture(id: number): Observable<voiture>{
    const url = `${apiURL}/${id}`;
    return this.http.get<voiture>(url);
   }


   trierVoitures(){
    this.voitures = this.voitures.sort((n1,n2)=>{
      if (n1.idVoiture! > n2.idVoiture! ){
        return 1;
      }
      if (n1.idVoiture! < n2.idVoiture!){
        return -1
      }
      return 0;
    });
   }

   updateVoiture(car:voiture): Observable<voiture>{
    return this.http.put<voiture>(apiURL, car ,httpOptions);
   }
    
   

   listeMarques():Observable<marqueWrapper>{
    return this.http.get<marqueWrapper>(this.apiURLMar);
   }

   ajouterMarque( mar: Marque):Observable<Marque>{
     return this.http.post<Marque>(this.apiURLMar, mar, httpOptions); }

   /*consulterMarque(id:number): Marque{
    return this.marques.find(mar => mar.idMar == id)!;
   }*/
  rechercherParMarque(idMar: number):Observable<voiture[]>{
    const url = `${apiURL}/carsmar/${idMar}`;
    return this.http.get<voiture[]>(url);
  }
  rechercherParNom(nom: string):Observable< voiture[]> {
    const url = `${apiURL}/carsByName/${nom}`;
    return this.http.get<voiture[]>(url);
    }
}
