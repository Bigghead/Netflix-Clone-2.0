import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from './../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  constructor(private movieData: MovieDataService, 
              private currentRoute: ActivatedRoute) { }

  movie;


  ngOnInit() {
    this.currentRoute.params.subscribe(
      (params) => {
        const id = +params['id'];
        console.log(id);
      }
    )
  }

}
