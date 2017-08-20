import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        public router: Router,
        public authService: AuthService
    ) { }

    canActivate() {
        if(this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false
        }
    };

}
