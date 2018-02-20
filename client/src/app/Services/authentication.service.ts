import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';
// import { authKeys } from '../../keys';

@Injectable()
export class AuthService {

  constructor(private http: Http){}

  isUser = new Subject<boolean>();
  user = null;


  isAuthenticated(){

      return this.user != null;
  }

 

}