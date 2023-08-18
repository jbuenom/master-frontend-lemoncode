import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogged = false;

  constructor(private _auth: AuthService) {
    this._auth.isLogged.subscribe(value => {
      this.isLogged = value;
    });

    const isLoggedFromLocalStorage = localStorage.getItem('isLogged');
    this._auth.isLogged = isLoggedFromLocalStorage === 'true' ? true : false;
  }
}
