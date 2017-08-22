import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { User } from '../../models/user';
import { Message } from 'primeng/primeng';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = {
    name: '',
    email: '',
    password: ''
  };
  public userForm: FormGroup;
  public registerMessages: Array<Message> = [];
  public emailRegex: string = "[^ @]*@[^ @]*"

  constructor(
    public fB: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.userForm = this.fB.group({
      'name': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  onRegisterSubmit(value) {
    this.user = value;
    this.authService.registerUser(this.user).subscribe(
     (data: any): void => {
       if(data.success) {
         this.flashMessagesService.show('You are registered and now can log in', {
          cssClass: 'ui-messages-info',
          timeout: 3000
         });
         this.router.navigate(['/login']);
       } else {
         this.registerMessages = [];
         this.registerMessages.push({
          severity: 'error',
          summary: 'Registration Error',
          detail: data.msg
         });
         this.userForm.controls['email'].reset();
         this.router.navigate(['/register']);
       }
     },
     (err: Error): void => {
       console.log(err);
     }
    );
  };

}
