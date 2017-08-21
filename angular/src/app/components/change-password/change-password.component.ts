import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { Message, ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  
  public changePasswordForm: FormGroup
  public candidatePassword: string;
  public newPassword: string;
  public confirmNewPassword: string;
  public changePasswordMsgs: Array<Message>;

  public user: User;

  constructor(
    public router: Router,
    public fB: FormBuilder,
    public authService: AuthService,
    public flashMessagesService: FlashMessagesService,
    public confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (profile: any): void => {
        this.user = profile.user;
      }
    );

    this.changePasswordForm = this.fB.group({
      'candidatePassword': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      'newPassword': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      'confirmNewPassword': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    });
  }

  onClick() {
    this.router.navigate(['/']);
  }

  onChangeSubmit(value) {
    if(value.newPassword == value.confirmNewPassword) {
      if(value.newPassword != value.candidatePassword) {
        this.confirmationService.confirm({
          message: 'Are you sure to change password?',
          key: "confirmChangePassword",
          accept: () => {
            this.authService.changePassword(this.user, value.candidatePassword, value.newPassword).subscribe(
              (data: any): void => {
                console.log(data);
                if (data.success) {
                  this.confirmationService.confirm({
                    message: 'Password Successfully Changed',
                    key: "confirmSuccessPassword",
                    accept: () => {
                      this.router.navigate(['/']);
                    }
                  });
                } else {
                  console.log(data.msg);
                  this.changePasswordMsgs = [];
                  this.changePasswordMsgs.push({
                    severity: 'error',
                    summary: 'Error',
                    detail: data.msg
                  })
                  this.router.navigate(['/password']);
                }
              });
          }
        });
           
      } else {
        this.changePasswordMsgs = [];
        this.changePasswordMsgs.push({
          severity: 'error',
          summary: 'Error',
          detail: 'New Password must be different than Current Password'
        });
        this.router.navigate(['/password']);
      } 
    } else {
      this.changePasswordMsgs = [];
      this.changePasswordMsgs.push({
        severity: 'error',
        summary: 'Error',
        detail: 'Confirm New Password must match New Password'
      });
      this.router.navigate(['/password']);
    }
  }

}
