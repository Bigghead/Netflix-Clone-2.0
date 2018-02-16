import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';
import { AuthService } from './../../Services/authentication.service';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
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
    private authService: AuthService, 
    private sanitizer: DomSanitizer) { }


  movie;
  imageUrl = 'https://image.tmdb.org/t/p/w185';
  id: number;
  userLiked = false;
  media_type: string;
  trailerUrl ;
  cast;


  ngOnInit() {

    this.currentRoute.params.subscribe(
      (params) => {

        const id = +params['id'];
        this.id = id;

        this.checkIfLiked();
        

          const type = params['media_type'];
          this.fetchMovieWithAjax(type, id);

          //should only get here if the user types in a url
          //not happy with this, we're forcing user to use search input at the top to get info
        if(this.movieData.allMovies.length === 0) {
          
          this.router.navigate(['/'])
        }
      }
    )
  }


  fetchMovieWithAjax(type: string, id: number) {

    this.http.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${Keys.omdbKey}&append_to_response=videos,images,credits`)
      .map(res => res.json())
      .map( res => {
        if(!res['media_type']){
          res['media_type'] = type;
        }
        return res;
      })
      .catch(error => {
        return Observable.throw(error);
      })
      .subscribe(res => {

        this.movie = res;
        this.media_type = type;
        this.cast = res.credits.cast.filter((cast, index) => index < 4 && cast.profile_path);
        this.trailerUrl = this.sanitizer
                              .bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ res.videos.results[0].key);

      })
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
