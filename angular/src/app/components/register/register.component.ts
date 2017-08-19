import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { User } from '../../models/user';
import { Message } from 'primeng/primeng';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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


  constructor(
    public fB: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fB.group({
      'name': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  onRegisterSubmit(value) {
    console.log(value);
    this.authService.registerUser(value).subscribe(
     (data: any): void => {
       if(data.success) {
         this.router.navigate(['/login']);
       } else {
         this.router.navigate(['/register']);
       }
     },
     (err: Error): void => {
       console.log(err);
     }
    );
  };

}
