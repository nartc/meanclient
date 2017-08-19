import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/primeng";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public items: Array<MenuItem> = [];

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Manage',
        items: [
          {
              label: 'Change Password', icon: 'fa-wrench'
          },
          {
              label: 'Log out',
              icon: 'fa-minus',
              command: (event: any): void => {
                  this.onLogoutClick();
              }
          }
        ]
      }
    ];
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
