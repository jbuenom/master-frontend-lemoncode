import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  loading = false;

  constructor(private _auth: AuthService, private _router: Router) {
    this.user = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
    if (this._auth.isLogged) {
      this._router.navigate(['/dashboard']);
    }
  }

  login() {
    this.loading = true;
    this._auth.login(this.user).subscribe({
      next: (value) => {
        if (value) {
          this._auth.isLogged = true;
          this._router.navigate(['/dashboard']);
        }
      },
      error: () => { },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
