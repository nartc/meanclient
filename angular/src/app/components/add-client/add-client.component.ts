import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { Client } from '../../models/client';
import { Message } from 'primeng/primeng';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  
  public client: Client;
  public clientForm: FormGroup;
  public addClientMessages: Array<Message> = [];
  public emailRegex: string = "[^ @]*@[^ @]*";
  public phoneRegex: string = "[1-9]{3}-[0-9]{3}-[0-9]{4}";

  constructor(
    public router: Router,
    public fB: FormBuilder,
    public  flashMessagesService: FlashMessagesService,
    public clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientForm = this.fB.group({
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

  onAddSubmit(value) {
    this.client = value;
    this.clientService.addClient(this.client).subscribe(
      (data: any): void => {
        if(data.success) {
          this.flashMessagesService.show(
            'New Client Added',
            {
              cssClass: 'ui-messages-info',
              timeout: 3000
            }
          );
          this.router.navigate(['/']);
        } else {
          this.addClientMessages = [];
          this.addClientMessages.push({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to add new client'
          });
          this.router.navigate(['/add']);
        }
      },
      (err: Error): void => {
        console.log(err);
      }
    );
  };

  onClick() {
    this.router.navigate(['/']);
  }

}
