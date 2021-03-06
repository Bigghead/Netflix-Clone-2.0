import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './authentication.service';
import { Subject } from 'rxjs/Rx';
import { Keys } from './../../keys';
import { OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()


export class MovieDataService {

    constructor(private authService: AuthService,
                private http: Http, 
                private router: Router) {}

    allMovies: any[] = [];
    allDataFetched = new Subject<any>();
    userMovies = new Subject<any>();
    TopShow :boolean = false;
    PopularShow :boolean = false;
    Popular :boolean = false;
    Latest :boolean = false;
    Today :boolean = false;



    getLatest() {
        return this.allMovies.filter(movie => movie.type == 'Latest');
    }


    getPopular() {
        return this.allMovies.filter(movie => movie.type == 'Popular');
    }


    getTopRatedShows() {
        return this.allMovies.filter(movie => movie.type === 'TopShow')
    }


    getPopularShows() {
        return this.allMovies.filter(movie => movie.type === 'PopularShow')
    }

    getTodayShows(){
        return this.allMovies.filter(movie => movie.type === 'Today')        
    }


    getOneMovie(movieId: number) {
        return this.allMovies.filter(movie => movie.id === movieId)
    }


    addOneToFavorite(userId, movie) {

        this.http.post(`https://morning-retreat-68692.herokuapp.com/${userId}/movies`, movie)
                 .catch(err => Observable.throw(err))
                 .subscribe(
                     (res) => {
                        this.authService.user.userList.push(movie);
                        this.userMovies.next(this.authService.user.userList);
                 }
            )
    }


    removeOneFromFavorite(userId, movie) {

        this.http.patch(`https://morning-retreat-68692.herokuapp.com/${userId}/movies`, movie)
                 .map(res => res.json())
                 .catch(err => Observable.throw(err))
                 .subscribe(
                    (res) => {
                        console.log(res);
                        this.authService.user.userList = res;
                        this.userMovies.next(this.authService.user.userList);
                   }
                 )
        }

}