import { Component, OnInit } from '@angular/core';
import { voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';


@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
})
export class AddVoitureComponent implements OnInit {
  

  newVoiture = new voiture();
  marques! : Marque[];
  newIdMar! : number;
  newMarque! : Marque;

  message :string | undefined ;
  
  constructor(private voitureService : VoitureService, private router :Router) { }

  ngOnInit(): void {
    this.voitureService.listeMarques().subscribe(mar =>{console.log(mar);
      this.marques = mar._embedded.marques;
           /*this.router.navigate(["voitures"]);*/
          });
  }

  addVoiture(){
    this.newVoiture.marque = this.marques.find(mar => mar.idMar == this.newIdMar)!;
    this.voitureService.ajouterVoiture(this.newVoiture).subscribe(v =>{console.log(v);
    this.router.navigate(["voitures"]);
  });
  }

}
