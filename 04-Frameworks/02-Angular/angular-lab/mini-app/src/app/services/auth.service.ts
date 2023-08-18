import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable, delay, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogged = new BehaviorSubject<boolean>(false);
  constructor() {
  }

  set isLogged(value: boolean) {
    localStorage.setItem('isLogged', String(value));
    this._isLogged.next(value);
  }

  get isLogged(): Observable<boolean> {
    return this._isLogged.asObservable();
  }

  login(user: User): Observable<boolean> {
    const {username, password} = user;
    return of(username === 'master@lemoncode.net' && password === '12345678').pipe(delay(2000));
  }

  logout(): void {
    localStorage.setItem('isLogged', 'false');
    this.isLogged = false;
  }

  getUsername(): string {
    return 'master@lemoncode.net';
  }
}
