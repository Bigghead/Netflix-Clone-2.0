// import { AuthService } from './../Services/Authentication.service';
import { Keys } from '../../../keys';
import { MovieDataService } from '../../Services/moviedata.service';
import { Http } from '@angular/http';
import { Component, OnInit, Injectable, Input, AfterViewInit } from '@angular/core';
import * as Flickity from 'flickity';


@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})

@Injectable()
export class MovieRowComponent implements OnInit {

  constructor(private http: Http,
              private movieData: MovieDataService) {}

  @Input() movieObj: {
             heading: string,
             type: string,
             url: string,
             fetchMethodName: any,
             media_type: string
          }
  @Input() index: number;

  movies: any[];
  imageUrl = 'https://image.tmdb.org/t/p/w640';


  ngOnInit() {

    let type = this.movieObj.type;
    let dataFetched = this.movieData[type];

      this.loadFlickity(this.index);
    
    if(!dataFetched){
       this.fetchData();

    } else {
      this.movies = this.movieObj.fetchMethodName;
      // setTimeout( () => this.loadFlickity(this.index) );
    }

  }


  fetchData() {

    // First time load, get data from an outside api
      this.http.get(this.movieObj.url)
        .map(res => res.json())
        .map(res => {

          res.results.forEach(movie => {

            movie.media_type = this.movieObj.media_type;
            if (!movie.type) {
              movie.type = this.movieObj.type;
            }
          })
          return res;
        })
        .subscribe( res => {


          this.movies = res.results;
          this.movieData[this.movieObj.type] = true;

          const newArr = this.movieData.allMovies.concat(this.movies);
          this.movieData.allMovies = newArr;
          setTimeout( () => this.loadFlickity(this.index) );

          }
        )
}


  loadFlickity(index: number) {

    const el = document.querySelectorAll('.carousel')[index];
    // var elem = el[this.index];
    const flkty = new Flickity(el, {
      // options
      freeScroll: true,
      wrapAround: true,
      initialIndex: 0,
      cellAlign: 'left'
    });
  }
}