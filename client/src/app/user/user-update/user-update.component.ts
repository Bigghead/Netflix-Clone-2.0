import { Router } from '@angular/router';
import { AuthService } from '../../Services/authentication.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private http: Http, 
              private authService: AuthService, 
              private router: Router) { }

  user
  accountForm

  ngOnInit() {

    this.user = this.authService.user;
    this.initForm();
  }


  initForm(){

    this.accountForm = new FormGroup({
      'userName' : new FormControl(this.user.userSettings.newUserName, Validators.required), 
      'fullName' : new FormControl(this.user.userSettings.fullName),
      'about'    : new FormControl(this.user.userSettings.about)
    })
  }


  submitForm(){

    console.log(this.accountForm.value);
    const updates = this.accountForm.value;

    this.http.patch(`http://localhost:3000/${this.user._id}/edit`, updates)
             .map(res => res.json())
             .subscribe( res => {
               console.log(res); 
               this.authService.user = res;
               this.authService.isUser.next(true);
               this.router.navigate(['/user', this.user._id])
             })
  }

}
