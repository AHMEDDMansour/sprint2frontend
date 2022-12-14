import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',

})
export class RechercheParMarqueComponent implements OnInit{
  IdMarque! : number;
  voitures! : voiture[];
  marques! : Marque[];

  constructor(private voitureService : VoitureService){

  }

  ngOnInit(): void{
    this.voitureService.listeMarques().
    subscribe( mar => {this.marques = mar._embedded.marques;
    console.log(mar);
});
  }

  onChange(){
    this.voitureService.rechercherParMarque(this.IdMarque).
subscribe(car =>{this.voitures=car});

  }
}
