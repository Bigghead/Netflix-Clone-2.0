import { AuthService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(private authService : AuthService) { }

  user;

  ngOnInit() {
    
    this.user = this.authService.user;
  }

}
