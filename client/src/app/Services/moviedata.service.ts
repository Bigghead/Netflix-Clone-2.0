import { Observable } from 'rxjs/Observable';
import { AuthService } from './authentication.service';
import { Subject } from 'rxjs/Rx';
import { Keys } from './../../keys';
import { OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()


export class MovieDataService {
    constructor(private authService: AuthService,
        private http: Http) {

    }

    Latest = false;
    Popular = false;
    allMovies: any[] = [];
    allDataFetched = new Subject<any>();



    getLatest() {
        return this.allMovies.filter(movie => movie.type == 'Latest');
    }

    getPopular() {
        return this.allMovies.filter(movie => movie.type == 'Popular');
    }

    getTopRatedShows(){
        return this.allMovies.filter(movie => movie.type === 'TopShow')
    }

    getPopularShows(){
        return this.allMovies.filter(movie => movie.type === 'PopularShow')
    }

    hasLoaded(type: string) {
        alert('from service: ' + this[type])
        this[type] = true;
    }

    getOneMovie(movieId: number) {
        return this.allMovies.filter(movie => movie.id === movieId)
    }

    addOneToFavorite(userId, movie) {
        this.http.post(`http://localhost:3000/${userId}/movies`, movie)
            .catch(err => Observable.throw(err))
            .subscribe(
                (res) => {
                this.authService.user.userList.push(movie);
                }
            )
    }

}