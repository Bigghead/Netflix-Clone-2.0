import { Subject } from 'rxjs/Rx';
import { Keys } from './../../keys';
import { OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()


export class MovieDataService {
    constructor() {

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

    hasLoaded(type: string) {
        alert('from service: ' + this[type])
        this[type] = true;
    }

    



}