import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private http: Http, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
