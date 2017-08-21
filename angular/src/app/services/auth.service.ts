import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { tokenNotExpired } from "angular2-jwt";
import { Observable } from "rxjs/Observable";
import { HttpService } from "./http.service";
import { LocalStorageService } from "./local-storage.service";

import { User } from '../models/user';

@Injectable()
export class AuthService {

  public authToken: any;
  public user: User;
  public currentUser: User;

  constructor(
    public httpService: HttpService,
    public localStorageService: LocalStorageService
  ) { }

  registerUser(user: User): Observable<User> {
    return this.httpService.post('/users/register', user, {'Content-Type':'application/json'});
  };

  authenticateUser(user: User): Observable<any> {
    return this.httpService.post('/users/authenticate', user, {'Content-Type': 'application/json'});
  };

  getProfile(): Observable<any> {
    this.loadToken();
    this.loadCurrentUser();

    return this.httpService.get('/users/profile', {'Authorization': this.authToken});
  };

  storeUserData(token: any, user: User): void {
    this.localStorageService.saveValueWithKey('id_token', token);
    this.localStorageService.saveValueWithKey('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  };

  loadToken(): void {
    this.authToken = this.localStorageService.fetchValueFromKey('id_token');
  };

  loadCurrentUser(): User {
    return this.currentUser = JSON.parse(this.localStorageService.fetchValueFromKey('user'));
  };

  isLoggedIn(): boolean {
    return tokenNotExpired('id_token');
  };

  logout(): void {
    this.authToken = null;
    this.user = null;
    this.currentUser = null;
    this.localStorageService.clearAll();
  };

  changePassword(user: User, candidatePassword: string, newPassword: string): Observable<any> {
    let data = {user, candidatePassword, newPassword}
    return this.httpService.put('/users/password', data, {'Content-Type':'application/json'});
  }

}
