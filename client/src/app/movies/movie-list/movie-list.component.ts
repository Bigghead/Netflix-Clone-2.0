import { Http } from '@angular/http';
import { MovieDataService } from './../../Services/moviedata.service';
import { Keys } from './../../../keys';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieData: MovieDataService,
    private currentRoute: ActivatedRoute,
    private http: Http) { }

  movieListComponent = [
    {
      heading: 'Latest Movies: ',
      type: 'Latest',
      url: "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2017-05-11&primary_release_date.lte=2017-05-18&api_key=" + Keys.omdbKey,
      fetchMethodName: this.movieData.getLatest()
    },
    {
      heading: 'Popular Movies: ',
      type: 'Popular',
      url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + Keys.omdbKey,
      fetchMethodName: this.movieData.getPopular()
    },
    {
      heading: 'Latest Movies: ',
      type: 'Latest',
      url: "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2017-05-11&primary_release_date.lte=2017-05-18&api_key=" + Keys.omdbKey,
      fetchMethodName: this.movieData.getLatest()
    }

  ]

  ngOnInit() {
    
  }

  checkAuth(){
    this.http.get('http://localhost:3000/checkAuth')
            .subscribe(
            (res) => console.log(res)
            )
  }

}
