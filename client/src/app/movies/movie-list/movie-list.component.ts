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
    private authService: AuthService) { }

  latestMovie;
  imageUrl = 'https://image.tmdb.org/t/p/w640';


  movieListComponent = [
    {
      heading: 'Top Rated Shows',
      type: 'TopShow',
      url: `https://api.themoviedb.org/3/tv/top_rated?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getTopRatedShows()
    },
    {
      heading: 'Popular Shows',
      type: 'PopularShow',
      url: `https://api.themoviedb.org/3/tv/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getPopularShows()
    },
     {
      heading: 'Airing Today',
      type: 'Today',
      url: `https://api.themoviedb.org/3/tv/airing_today?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getTodayShows()
    },
    {
      heading: 'Recently Added Movies',
      type: 'Latest',
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getLatest()
    },
    {
      heading: 'Popular Movies',
      type: 'Popular',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`,
      fetchMethodName: this.movieData.getPopular()
    }


    // url: `https://api.themoviedb.org/3/movie/popular?api_key=${Keys.omdbKey}&language=en-US&page=1`,


  ]

  ngOnInit() {

  }

  ngAfterViewInit() {

    // this.getNewest();
  }

  // getNewest() {

  //   this.http.get(`https://api.themoviedb.org/3/movie/latest?api_key=${Keys.omdbKey}&language=en-US`)
  //     .map(res => res.json())
  //     .subscribe(
  //     (res) => this.latestMovie = res
  //     )
  // }

  checkAuth() {
    this.http.get('http://localhost:3000/checkAuth')
      .subscribe(
      (res) => console.log(res)
      )
  }

}
