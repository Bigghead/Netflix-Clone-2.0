import { Keys } from './../../../keys';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(private http: Http, 
              private currentRoute: ActivatedRoute) { }

  
  searchResults: any[];
  

  ngOnInit() {

    this.currentRoute
        .params
        .subscribe(
          (params) => {
            const searchTerm = params['searchTerm'];
            this.searchMovies(searchTerm);
          }
        )

  }


  searchMovies(term: string){

    this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${Keys.omdbKey}&page=1&query=${term}&&include_adult=false`)
             .map(res => res.json())
             .subscribe(
               (res) => {
                 console.log(res.results);
                 this.searchResults = res.results;
               }
             )
  }

}
