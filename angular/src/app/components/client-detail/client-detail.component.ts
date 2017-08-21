import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuItem, ConfirmationService } from 'primeng/primeng';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  
  public buttonItems: Array<MenuItem> = [];
  public id: string = '';
  public client: Client;
  public hasBalance: boolean = false;
  public showEditBalanceInput: boolean = false;

  constructor(
    public router: Router,
    public aRoute: ActivatedRoute,
    public clientService: ClientService,
    public flashMessagesService: FlashMessagesService,
    public confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    //Get ID
    this.id = this.aRoute.snapshot.params['id'];

    //Get Client by Id
    this.clientService.getClientById(this.id).subscribe(
      (data: any): void => {
        if(data.client.balance > 0) {
          this.hasBalance = true;
        } else {
          this.hasBalance = false;
        }
        this.client = data.client;
      }
    )
    //Context Menu
    this.buttonItems = [
      {
        label: 'Edit',
        icon: 'fa-wrench',
        command: () => {
          this.router.navigate(['/edit/'+this.id]);
        }
      },
      {
        label: 'Delete',
        icon: 'fa-close',
        command: () => {
          this.confirmationService.confirm({
            message: 'Are you sure you want to delete "'+this.id+'" ?',
            accept: () => {
              this.clientService.deleteClient(this.id).subscribe(
                (data: any): void => {
                  if(data.success) {
                    this.flashMessagesService.show(
                      'Client Deleted',
                      {
                        cssClass: 'ui-messages-info',
                        timeout: 3000
                      }
                    );
                    this.router.navigate(['/']);
                  } else {
                    this.flashMessagesService.show(
                      data.msg,
                      {
                        cssClass: 'ui-messages-warn',
                        timeout: 3000
                      }
                    );
                    this.router.navigate(['/client/'+this.id]);
                  }
                }
              );
            }
          });
        }
      }
    ];
  }

  onClick() {
    this.router.navigate(['/']);
  }

  updateBalance(id: string) {
    this.clientService.updateClient(this.id, this.client).subscribe(
      (data: any): void => {
        if(data.success) {
          this.flashMessagesService.show(
            'Balance Updated',
            {
              cssClass: 'ui-messages-info',
              timeout: 3000
            }
          );
          this.router.navigate(['/client/'+this.id]);
        } else {
          this.flashMessagesService.show(
            'Balance Update Failed',
            {
              cssClass: 'ui-messages-danger',
              timeout: 3000
            }
          );
          this.router.navigate(['/client/'+this.id]);
        }
      }
    );
  }

}
