import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from "rxjs/Observable";

import { Client } from '../models/client';

@Injectable()
export class ClientService {

  public clients: Array<Client> = [];
  public client: Client = {
    _id: ''
  }

  constructor(
    public httpService: HttpService
  ) { }

  addClient(client: Client): Observable<any> {
    return this.httpService.post('/clients/addClient', client, {'Content-Type': 'application/json'});
  }

  getClients(): Observable<any> {
    return this.httpService.get('/clients/clients', {});
  }

  getClientById(id: string): Observable<any> {
    return this.httpService.get('/clients/client/'+id, {});
  }

  updateClient(id: string, client: Client): Observable<any> {
    console.log(client);
    return this.httpService.put('/clients/edit/'+id, client, {'Content-Type': 'application/json'});
  }

  deleteClient(id: string): Observable<any> {
    return this.httpService.delete('/clients/delete/'+id, {});
  }
}
