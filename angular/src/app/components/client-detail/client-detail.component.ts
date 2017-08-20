import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  
  public buttonItems: Array<MenuItem> = [];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.buttonItems = [
      {
        label: 'Edit',
        icon: 'fa-wrench',
        command: () => {
          //TODO: Link to EDIT Client
        }
      },
      {
        label: 'Delete',
        icon: 'fa-close',
        command: () => {
          //TODO: Delete Client
        }
      }
    ];
  }

  onClick() {
    this.router.navigate(['/']);
  }

}
