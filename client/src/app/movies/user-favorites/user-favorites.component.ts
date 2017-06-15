import { MovieDataService } from './../../Services/moviedata.service';
import * as Flickity from 'flickity';
import { AuthService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css']
})
export class UserFavoritesComponent implements OnInit {

  constructor(private authService: AuthService, 
              private movieData: MovieDataService) { }


  userFavorites = [];
  imageUrl = 'https://image.tmdb.org/t/p/w640';


  ngOnInit() {

    this.userFavorites = this.authService.user.userList;

    // this.movieData.userMovies
    //               .subscribe( res => {
    //                 this.userFavorites = res;
    //               })

    setTimeout( () => this.loadFlickity() );

  }


  loadFlickity() {

    const el = document.querySelector('.carousels');
    // var elem = el[this.index];
    const flkty = new Flickity(el, {
      // options
      initialIndex: 0,
      cellAlign: 'left',
      contain: true
    });
  }

}
