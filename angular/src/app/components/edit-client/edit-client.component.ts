import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuItem, ConfirmationService } from 'primeng/primeng';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  public id: string;
  public client: Client;
  public editClientForm: FormGroup;
  public emailRegex: string = "[^ @]*@[^ @]*";
  public phoneRegex: string = "[1-9]{3}-[0-9]{3}-[0-9]{4}";

  constructor(
    public router: Router,
    public aRoute: ActivatedRoute,
    public clientService: ClientService,
    public flashMessagesService: FlashMessagesService,
    public confirmationService: ConfirmationService,
    public fB: FormBuilder
  ) { }

  ngOnInit() {
    this.id = this.aRoute.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(
      (data: any): void => {
        this.client = data.client;
      }
    );

    this.editClientForm = this.fB.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(this.phoneRegex)
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)
      ])),
      'balance': new FormControl(0, Validators.required)
    });

  }

  onClick() {
    this.router.navigate(['/client/'+this.id]);
  }

  onEditSubmit(value) {
    this.client = value;
    this.confirmationService.confirm({
      message: 'Are you sure to edit this client?',
      accept: () => {
        this.clientService.updateClient(this.id, this.client).subscribe(
          (data: any): void => {
            if(data.success) {
              this.flashMessagesService.show(
                'Client Updated',
                {
                  cssClass: 'ui-messages-info',
                  timeout: 3000
                }
              );
              this.router.navigate(['/client/'+this.id]);
            } else {
              this.flashMessagesService.show(
                'Client Update Failed',
                {
                  cssClass: 'ui-messages-danger',
                  timeout: 3000
                }
              );
              this.router.navigate(['/edit/'+this.id]);
            }
          }
        );
      }
    });
  }

}
