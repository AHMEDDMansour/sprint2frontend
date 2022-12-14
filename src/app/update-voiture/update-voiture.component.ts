import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { voiture } from '../model/voiture.model';
import { Marque } from '../model/marque.model';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles:[]

})
export class UpdateVoitureComponent implements OnInit{
  currentVoiture = new voiture();
  marques! : Marque[];
  updatedMarId! : number;


  

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private voitureService: VoitureService){

  }

  ngOnInit(): void {
   this.voitureService.listeMarques().subscribe(marq =>{this.marques = marq._embedded.marques; console.log(marq);});
   this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).subscribe( car  =>{this.currentVoiture = car;
   this.updatedMarId= this.currentVoiture.marque!.idMar;
  });
    }

  updateVoiture(){
    this.currentVoiture.marque = this.marques.find(mar => mar.idMar == this.updatedMarId)!;
    this.voitureService.updateVoiture(this.currentVoiture).subscribe(car =>{this.router.navigate(['voitures']);
    });
 
    
  }

}
