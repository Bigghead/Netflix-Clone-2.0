import { Http } from '@angular/http';
import { MovieDataService } from './../../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';
import { Keys } from '../../../../keys';

@Component({
  selector: 'app-static-banner',
  templateUrl: './static-banner.component.html',
  styleUrls: ['./static-banner.component.css']
})
export class StaticBannerComponent implements OnInit {

  constructor(private movieData: MovieDataService, 
              private http: Http) { }

  movie;
  imageUrl = 'https://image.tmdb.org/t/p/w640';


  ngOnInit() {

    // this.initData();
  }


  initData(){

    this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Keys.omdbKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
             .map(res => res.json())
             .subscribe(
               (res) => {
                 console.log(res);
                 this.movie = res.results[0];
               }
             )
  }

}
