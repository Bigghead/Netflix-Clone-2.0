import { AuthService } from './../../Services/authentication.service';
import { Http } from '@angular/http';
import { MovieDataService } from '../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieData: MovieDataService, 
              private http: Http, 
              private authService: AuthService) { }

  user = false;

  ngOnInit() {

    this.authService.isUser
        .subscribe(
          (res) => this.user = res
        )
  }

  

}
