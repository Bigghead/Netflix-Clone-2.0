import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDataService } from './../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';
import { Keys } from '../../../keys';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  constructor(private movieData: MovieDataService,
              private currentRoute: ActivatedRoute, 
              private router: Router, 
              private http: Http) { }

  movie;
  imageUrl = 'https://image.tmdb.org/t/p/w640';



  ngOnInit() {


    this.currentRoute.params.subscribe(
      (params) => {
        const id = +params['id'];

        if(this.movieData.allMovies.length === 0){
          this.fetchMovieWithAjax(id);
        } else {
        this.movie = this.movieData.getOneMovie(id)[0];
        console.log(this.movie);
        }
      }
    )
  }

  fetchMovieWithAjax(id: number){
    this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${Keys.omdbKey}`)
             .map(res => res.json())
             .subscribe( res => this.movie = res)
  }

}
