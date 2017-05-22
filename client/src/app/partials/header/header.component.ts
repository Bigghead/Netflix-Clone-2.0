import { Http } from '@angular/http';
import { MovieDataService } from '../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieData: MovieDataService, private http: Http) { }

  ngOnInit() {

  }

  logIn(){
    this.http.get('http://localhost:3000/login')
        .subscribe(
          (res) => console.log(res)
        )
  }

}
