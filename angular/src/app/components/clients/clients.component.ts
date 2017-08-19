import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients: Array<Client> = [];
  public totalOwed: number = 0;
  public selectedClient: Client;

  constructor(
    public clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      (data: any) => {
        console.log(data);
        this.clients = data.clients;
        this.getTotal();
      }
    );
  }

  getTotal() {
    let total: number = 0;
    for(let i = 0; i < this.clients.length; i++) {
      total += this.clients[i].balance;
    }

    this.totalOwed = total;
  }

  onRowSelect(event) {
    console.log(event);
    
  }

}
