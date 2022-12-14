import { Component, OnInit } from '@angular/core';
import { voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit{
  nomVoiture! : string;
  voitures! : voiture[];
  allVoitures! : voiture[];
  searchTerm! : string;

  constructor(private voitureService : VoitureService){}


  ngOnInit(){
    this.voitureService.listeVoiture().
    subscribe(prods => { console.log(prods);
       this.voitures = prods; 
      });

  }


  rechercherCars(){
    this.voitureService.rechercherParNom(this.nomVoiture).subscribe(car =>{
      console.log(car);
      this.voitures=car});
  }

  onKeyUp(filterText : string){
     this.voitures = this.allVoitures.filter(item => 
      item.nomVoiture!.toLowerCase().includes(filterText));
 }
}
