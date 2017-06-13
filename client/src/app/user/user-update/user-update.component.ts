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
              private authService: AuthService) { }

  user
  accountForm

  ngOnInit() {

    this.user = this.authService.user;
    this.initForm();
  }


  initForm(){

    this.accountForm = new FormGroup({
      'userName' : new FormControl(this.user.userName, Validators.required), 
      'fullName' : new FormControl(this.user.fullName),
      'about'    : new FormControl(this.user.about)
    })
  }


  submitForm(){

    console.log(this.accountForm.value);
    const updates = this.accountForm.value;

    this.http.patch(`http://localhost:3000/${this.user._id}/edit`, updates)
             .subscribe( res => console.log(res))
  }

}
