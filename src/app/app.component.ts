import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyCars';
  isloggedin!: string;
  loggedUser!:string

  constructor(public authService: AuthService, private router: Router){

  }
  onLogout(){
    this.authService.logout();
  }

  ngOnInit () { 
     let isloggedin;
     let loggedUser; 
     isloggedin = localStorage.getItem('isloggedIn');
     loggedUser = localStorage.getItem('loggedUser'); 
      if (isloggedin!="true" || !loggedUser) 
          this.router.navigate(['/login']); 
      else 
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
     }
}
