import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent {
  userName: string;
  constructor(private _auth: AuthService, private _router: Router){
    this.userName = this._auth.getUsername();
  }
  logout(): void {
    this._auth.isLogged = false;
    this._router.navigate(['/login']);
  }
}
