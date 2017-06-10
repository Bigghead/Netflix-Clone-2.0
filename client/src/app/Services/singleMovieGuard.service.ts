import { AuthService } from './authentication.service';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class CanActivateRoute implements CanActivate{
    
    constructor(private authService: AuthService,
                private router: Router){}

    canActivate(){
        if(this.authService.isAuthenticated()){
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}