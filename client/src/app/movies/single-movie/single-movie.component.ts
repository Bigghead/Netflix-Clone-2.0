import { Observable } from 'rxjs/Observable';
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
        
         if(params['type'] !== undefined ){

          const type = params['type'];
          this.fetchMovieWithAjax(type, id);

          //should only get here if the user types in a url
          //not happy with this, we're forcing user to use search input at the top to get info
        } else if(this.movieData.allMovies.length === 0) {
          
          this.router.navigate(['/movies'])
        } else {
          
          this.movie = this.movieData.getOneMovie(id)[0];
        }
      }
    )
  }


  fetchMovieWithAjax(type: string, id: number) {

    this.http.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${Keys.omdbKey}`)
      .map(res => res.json())
      .map( res => {
        if(!res['media_type']){
          res['media_type'] = type;
          console.log(res);
        }
        return res;
      })
      .catch(error => {
        return Observable.throw(error);
      })
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
