import { MovieDataService } from './../../Services/moviedata.service';
import { Keys } from './../../../keys';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieData : MovieDataService) { }

  movieListComponent = [
    {
      heading: 'Latest Movies: ',
      type: 'Latest',
      url:"https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2017-05-11&primary_release_date.lte=2017-05-18&api_key=" + Keys.omdbKey,
      fetchMethodName: this.movieData.getLatest()
    }, 
    {
      heading: 'Popular Movies: ',
      type: 'Popular',
      url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + Keys.omdbKey,
      fetchMethodName: this.movieData.getPopular()
    }

  ]

  ngOnInit() {
  }

}
