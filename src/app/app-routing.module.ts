import { VoitureGuard } from './voiture.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarquesComponent } from './liste-marque/liste-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  {path : "voitures", component : VoituresComponent},
  {path : "add-voiture", component : AddVoitureComponent},
  {path : "updateVoiture/:id",component: UpdateVoitureComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeMarques", component : ListeMarquesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "rechercheParMarque", component: RechercheParMarqueComponent},
  {path : "add-voiture", component: AddVoitureComponent, canActivate:[VoitureGuard]},
  {path : "", redirectTo : "voitures", pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
