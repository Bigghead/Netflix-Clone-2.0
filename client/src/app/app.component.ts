import { AuthService } from './Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor( private http: Http, public authService: AuthService){

    
  }
  title = 'Welcome';

  ngOnInit(){
    
    this.http.get('https://morning-retreat-68692.herokuapp.com/checkAuth')
        .map(data => data.json())
        .catch(err => Observable.throw(err))
        .subscribe(
          (res) => {
            this.authService.user = res;
            this.authService.isUser.next(true);
          })
    
  }
}
