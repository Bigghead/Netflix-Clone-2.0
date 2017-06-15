import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
// import { MovieDataService } from './../../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';
import { Keys } from '../../../../keys';

@Component({
  selector: 'app-static-banner',
  templateUrl: './static-banner.component.html',
  styleUrls: ['./static-banner.component.css']
})
export class StaticBannerComponent implements OnInit {

  constructor(
              private http: Http) { }

  movie;
  imageUrl: string = 'https://image.tmdb.org/t/p/w780';
  random = Math.round(Math.random() * 18) + 1 ;


  ngOnInit() {

    // this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`)
    //          .map(res => res.json())
    //          .subscribe(res => {

    //           this.movie = res.results.filter(movie => {
    //             return movie.backdrop_path != null;
    //           })
    //           console.log(this.movie);

    //          })

  }

}
