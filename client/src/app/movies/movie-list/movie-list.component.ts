import { AuthService } from './../../Services/authentication.service';
import { Http } from '@angular/http';
import { MovieDataService } from './../../Services/moviedata.service';
import { Keys } from './../../../keys';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterViewInit {

  constructor(private movieData: MovieDataService,
              private currentRoute: ActivatedRoute,
              private http: Http,
              public authService: AuthService) { }

  latestMovie;
  imageUrl = 'https://image.tmdb.org/t/p/w640';


  movieListComponent = [
    {
      heading: 'Top Rated Shows',
      type: 'TopShow',
      url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getTopRatedShows(),
      media_type: 'tv'
    },
    {
      heading: 'Popular Shows',
      type: 'PopularShow',
      url: `https://api.themoviedb.org/3/tv/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getPopularShows(),
      media_type: 'tv'
    },
     {
      heading: 'Airing Today',
      type: 'Today',
      url: `https://api.themoviedb.org/3/tv/airing_today?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getTodayShows(),
      media_type: 'tv'
    },
    {
      heading: 'Recently Added Movies',
      type: 'Latest',
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getLatest(),
      media_type: 'movie'
    },
    {
      heading: 'Popular Movies',
      type: 'Popular',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getPopular(),
      media_type: 'movie'
    }


    // url: `https://api.themoviedb.org/3/movie/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`,


  ]

  ngOnInit() {

  }

  ngAfterViewInit() {

  }


  checkAuth() {
    this.http.get('http://localhost:3000/checkAuth')
      .subscribe(
      (res) => console.log(res)
      )
  }

}
