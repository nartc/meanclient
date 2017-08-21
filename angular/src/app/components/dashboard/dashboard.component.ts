import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { HttpService } from "../../services/http.service";

import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public user: User;

  constructor(
    public authService: AuthService,
    public httpService: HttpService,
    public router: Router
  ) { }

  ngOnInit(): void {
     this.authService.getProfile().subscribe(
       (profile: any): void => {

         this.user = profile.user;
       },
       (err: Error): void => {
         console.log(err);
       }
     )
  }

}
