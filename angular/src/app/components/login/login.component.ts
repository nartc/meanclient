import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Message } from 'primeng/primeng';

import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  public loginMessages: Array<Message> = [];

  constructor(
    public authService: AuthService,
    public httpService: HttpService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(): void{
    const user = {
      email: this.email,
      password: this.password
    };

    console.log("In Login.ts");
    
    this.authService.authenticateUser(user).subscribe(
      (data: any): void => {
          if(data.success) {
            console.log(data);
            this.authService.storeUserData(data.token, data.user);
            this.router.navigate(['/']);
          } else {
            this.loginMessages = [];
            this.loginMessages.push({
              severity: 'error',
              summary: 'Login Error',
              
              detail: data.msg 
            });
            this.router.navigate(['/login']);
          }
      },
      (err: Error): void => {
        console.log(err);
      }
    );
  }

}
