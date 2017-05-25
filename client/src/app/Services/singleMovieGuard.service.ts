import { MovieDataService } from './moviedata.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()

export class CanActivateSingle implements CanActivate{
    
    constructor(private movieData: MovieDataService){}
    canActivate(){
        return this.movieData.allMovies.length !== 0;
    }
}