import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MenuItem, ConfirmationService } from "primeng/primeng";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public items: Array<MenuItem> = [];

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessagesService: FlashMessagesService,
    public confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Manage',
        items: [
          {
              label: 'Change Password', 
              icon: 'fa-wrench',
              command: (event: any): void => {
                this.router.navigate(['/password/'])
              }
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
    this.confirmationService.confirm({
      message: 'Are you sure to log out?',
      key: "navConfirm",
      accept: () => {
        this.authService.logout();
        this.flashMessagesService.show('Logged out', {
          cssClass: 'ui-messages-info',
          timeout: 3000
        });
        this.router.navigate(['/login']);
      }
    });
    // this.authService.logout();
    // this.flashMessagesService.show('Logged out', {
    //   cssClass: 'ui-messages-info',
    //   timeout: 3000
    // });
    // this.router.navigate(['/login']);
    return false;
  }

}
