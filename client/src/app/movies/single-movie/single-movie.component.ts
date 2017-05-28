import { Subject } from 'rxjs/Rx';
import { AuthService } from './../../Services/authentication.service';
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
    private http: Http,
    private authService: AuthService) { }


  movie;
  imageUrl = 'https://image.tmdb.org/t/p/w640';
  id: number;
  userLiked = false;


  ngOnInit() {

  

    this.currentRoute.params.subscribe(
      (params) => {
        const id = +params['id'];
        this.id = id;

        this.checkIfLiked();

        if (this.movieData.allMovies.length === 0) {
          this.fetchMovieWithAjax(id);
          
        } else {
          this.movie = this.movieData.getOneMovie(id)[0];
          console.log(this.movie);
        }
      }
    )
  }

  fetchMovieWithAjax(id: number) {

    this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${Keys.omdbKey}`)
      .map(res => res.json())
      .subscribe(res => this.movie = res)
  }

  checkIfLiked(){

    const user = this.authService.user;
   if(user) {
     user.userList.forEach(movie => {
       if( movie.id === this.id){
         this.userLiked = true;
       }
       })
     }
   }


  addToList(){
    // this.checkIfLiked();
    this.userLiked = !this.userLiked;
    const userId = this.authService.user._id
    this.movieData.addOneToFavorite( userId, this.movie);
  }

  removeFromList(){

    this.userLiked = !this.userLiked;
    const userId = this.authService.user._id;
    this.movieData.removeOneFromFavorite(userId, this.movie);
  }

}
