// import { AuthService } from './../Services/Authentication.service';
import { Keys } from '../../../keys';
import { MovieDataService } from '../../Services/moviedata.service';
import { Http } from '@angular/http';
import { Component, OnInit, Injectable, Input, AfterViewInit } from '@angular/core';
import * as Flickity from 'flickity';


// declare var $: any;
@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})

@Injectable()
export class MovieRowComponent implements OnInit, AfterViewInit {

  constructor(private http: Http,
    private movieData: MovieDataService) {

  }

  @Input() movieObj: {
    heading: string,
    type: string,
    url: string,
    fetchMethodName: any
  }
  @Input() index: number;

  movies: any[];
  imageUrl = 'https://image.tmdb.org/t/p/w640';


  ngOnInit() {

    this.fetchData();
  }

  ngAfterViewInit() {
  }


  fetchData() {
    let type = this.movieObj.type;
    let dataFetched = this.movieData[type];

    // First time load, get data from an outside api
    if (!dataFetched) {
      this.http.get(this.movieObj.url)
        .map(res => res.json())
        .map(res => {

          res.results.forEach(movie => {
            if (!movie.type) {
              movie.type = this.movieObj.type;

            }
          })
          return res;
        })
        .subscribe(
        (res) => {
          this.movies = res.results;
          this.movieData[this.movieObj.type] = true;

          const newArr = this.movieData.allMovies.concat(this.movies);
          this.movieData.allMovies = newArr;

          setTimeout(() => {
            this.loadFlickity(this.index)
          }, 0);
        }
        )

    } else {

      this.movies = this.movieObj.fetchMethodName;
      setTimeout(() => this.loadFlickity(this.index));
    }
  }


  loadFlickity(index: number) {

    const el = document.querySelectorAll('.carousel')[index];
    // var elem = el[this.index];
    const flkty = new Flickity(el, {
      // options
      freeScroll: true,
      wrapAround: true,
      initialIndex: 0
    });
  }

}