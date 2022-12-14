import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { urlToHttpOptions } from 'url';
import { Marque } from '../model/marque.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-liste-marque',
  templateUrl: './liste-marque.component.html',
})
export class ListeMarquesComponent implements OnInit {
    marques!: Marque[];
    updatedMar: Marque ={"idMar":0,"nomMar":""};
    ajout: boolean=true;
    
    constructor(private voitureService: VoitureService) {

     } 
     
     ngOnInit(): void {
       this.chargerMarques();
       }
      
       chargerMarques(){
        this.voitureService.listeMarques().
       subscribe(mar => { this.marques = mar._embedded.marques;
         console.log(mar);
         });

       }


      marqueUpdated(mar:Marque){
        console.log("marque recu du composent", mar);
        this.voitureService.ajouterMarque(mar).subscribe( ()=> this.chargerMarques());
      }
      
      updateMar(mar :Marque){
        this.updatedMar = mar;
        this.ajout=false;
      }
      
      
      }
