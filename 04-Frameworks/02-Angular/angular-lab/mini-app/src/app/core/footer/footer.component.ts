import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isLogged!: boolean;
 constructor(private _auth: AuthService){
  this._auth.isLogged.subscribe({
    next: (value) => {
      this.isLogged = value;
    }
  });
 }
}

