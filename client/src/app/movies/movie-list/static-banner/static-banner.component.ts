import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MovieDataService } from './../../../Services/moviedata.service';
import { Component, OnInit } from '@angular/core';
import { Keys } from '../../../../keys';

@Component({
  selector: 'app-static-banner',
  templateUrl: './static-banner.component.html',
  styleUrls: ['./static-banner.component.css']
})
export class StaticBannerComponent implements OnInit {

  constructor(private movieData: MovieDataService,
    private http: Http) { }

  movie;
  // imageUrl: string = 'https://image.tmdb.org/t/p/w640';
  
  imageSub;


  ngOnInit() {

   this.initData();

  }


  initData() {

    this.http.get(`https://api.themoviedb.org/3/movie/282035?api_key=${Keys.omdbKey}&append_to_response=videos,images,credits`)
             .map(res => res.json())
             .subscribe(
               (res) => {
                console.log(res.images);
                this.movie = res;

                // this.imageUrl += res.images.backdrops[0].file_path;
      }
      )
  }

  

}
